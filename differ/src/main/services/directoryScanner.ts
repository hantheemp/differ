import { promises as fs } from 'fs'
import * as path from 'path'

/**
 * Recursively get all files in a directory
 */
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

/**
 * Get all files with optional filtering
 */
export async function getAllFilesFiltered(
  directoryPath: string,
  filter?: (filePath: string) => boolean
): Promise<string[]> {
  const allFiles = await getAllFiles(directoryPath)
  return filter ? allFiles.filter(filter) : allFiles
}
