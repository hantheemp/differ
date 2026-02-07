import * as path from 'path'
import { getAllFiles } from '../fs/directoryScanner'
import { fileExists, getFileHash } from '../fs/file'
import { FileStatus } from '../../shared/fileStatus'

export type FileCompareResult = {
  path: string
  status: FileStatus
}

export async function compareDirectories(
  baseDir: string,
  targetDir: string
): Promise<FileCompareResult[]> {
  const baseFiles = await getAllFiles(baseDir)
  const targetFiles = await getAllFiles(targetDir)

  const baseSet = new Set(baseFiles.map((p) => path.relative(baseDir, p)))
  const targetSet = new Set(targetFiles.map((p) => path.relative(targetDir, p)))

  const allPaths = new Set<string>([...baseSet, ...targetSet])

  const results: FileCompareResult[] = []

  for (const relativePath of allPaths) {
    const basePath = path.join(baseDir, relativePath)
    const targetPath = path.join(targetDir, relativePath)

    const baseExists = await fileExists(basePath)
    const targetExists = await fileExists(targetPath)

    if (!baseExists && targetExists) {
      results.push({
        path: relativePath,
        status: 'added'
      })
      continue
    }

    if (baseExists && !targetExists) {
      results.push({
        path: relativePath,
        status: 'removed'
      })
      continue
    }

    const [baseHash, targetHash] = await Promise.all([
      getFileHash(basePath),
      getFileHash(targetPath)
    ])

    results.push({
      path: relativePath,
      status: baseHash === targetHash ? 'unchanged' : 'modified'
    })
  }

  return results
}
