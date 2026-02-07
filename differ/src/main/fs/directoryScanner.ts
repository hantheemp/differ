import { promises as fs } from 'fs'
import * as path from 'path'

export async function getAllFiles(directoryPath: string): Promise<string[]> {
  const entries = await fs.readdir(directoryPath)

  const filePaths = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directoryPath, entry)
      const stat = await fs.stat(fullPath)

      return stat.isDirectory() ? getAllFiles(fullPath) : [fullPath]
    })
  )

  return filePaths.flat()
}
