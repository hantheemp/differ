import * as path from 'path'

/**
 * Get relative path from base to target
 */
export function getRelativePath(basePath: string, targetPath: string): string {
  return path.relative(basePath, targetPath)
}

/**
 * Join multiple path segments
 */
export function joinPaths(...paths: string[]): string {
  return path.join(...paths)
}

/**
 * Normalize a path
 */
export function normalizePath(filePath: string): string {
  return path.normalize(filePath)
}

/**
 * Get the file name from a path
 */
export function getFileName(filePath: string): string {
  return path.basename(filePath)
}

/**
 * Get the directory name from a path
 */
export function getDirectoryName(filePath: string): string {
  return path.dirname(filePath)
}

/**
 * Get file extension
 */
export function getFileExtension(filePath: string): string {
  return path.extname(filePath)
}
