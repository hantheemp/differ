import * as path from 'path'
import { getAllFiles } from '../fs/directoryScanner'
import { getFileHash, fileExists } from '../fs/file'
import { loadIgnoreRules } from '../fs/ignore'
import { FileCompareResult, FileStatus } from '../../shared/fileStatus'

export async function compareDirectories(
  baseDir: string,
  targetDir: string
): Promise<FileCompareResult[]> {
  const ignoreRules = await loadIgnoreRules(baseDir)

  const baseFiles = await getAllFiles(baseDir, baseDir, ignoreRules)
  const targetFiles = await getAllFiles(targetDir, targetDir, ignoreRules)

  const baseSet = new Set(baseFiles.map((p) => path.relative(baseDir, p)))
  const targetSet = new Set(targetFiles.map((p) => path.relative(targetDir, p)))

  const allPaths = new Set([...baseSet, ...targetSet])

  const results: FileCompareResult[] = []

  for (const relativePath of allPaths) {
    const basePath = path.join(baseDir, relativePath)
    const targetPath = path.join(targetDir, relativePath)

    const baseExists = await fileExists(basePath)
    const targetExists = await fileExists(targetPath)

    let status: FileStatus

    if (!baseExists && targetExists) status = 'added'
    else if (baseExists && !targetExists) status = 'removed'
    else {
      const [baseHash, targetHash] = await Promise.all([
        getFileHash(basePath),
        getFileHash(targetPath)
      ])
      status = baseHash === targetHash ? 'unchanged' : 'modified'
    }

    results.push({ path: relativePath, status })
  }

  return results
}
