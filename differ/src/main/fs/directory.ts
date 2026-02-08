import { promises as fs } from 'fs'
import * as path from 'path'
import { IgnoreRules, shouldIgnore } from './ignore'

export async function getAllFiles(
  rootDir: string,
  currentDir = rootDir,
  ignoreRules: IgnoreRules
): Promise<string[]> {
  const entries = await fs.readdir(currentDir, { withFileTypes: true })
  const results: string[] = []

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name)
    const relativePath = path.relative(rootDir, fullPath)

    if (shouldIgnore(relativePath, ignoreRules)) {
      continue
    }

    if (entry.isDirectory()) {
      results.push(...(await getAllFiles(rootDir, fullPath, ignoreRules)))
    } else {
      results.push(fullPath)
    }
  }

  return results
}
