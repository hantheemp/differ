import * as path from 'path'
import { getAllFiles } from '../fs/directory'
import { getFileHash, fileExists } from '../fs/file'
import { FileCompareResult, FileStatus } from '../../shared/fileStatus'
import { loadIgnoreConfig, getActiveIgnoreRules } from './ignore'

export async function compareDirectories(
  baseDir: string,
  targetDir: string
): Promise<FileCompareResult[]> {
  const config = await loadIgnoreConfig()
  const ignoreRules = getActiveIgnoreRules(config)

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
