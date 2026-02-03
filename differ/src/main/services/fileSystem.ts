import { promises as fs } from 'fs'
import * as crypto from 'crypto'

/**
 * Check if a file exists
 */
export async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

/**
 * Calculate SHA-256 hash of a file
 */
export async function getFileHash(filePath: string): Promise<string> {
  try {
    const content = await fs.readFile(filePath)
    return crypto.createHash('sha256').update(content).digest('hex')
  } catch (error) {
    console.error(`Error hashing file ${filePath}:`, error)
    return ''
  }
}

/**
 * Read file contents
 */
export async function readFile(filePath: string): Promise<Buffer> {
  return fs.readFile(filePath)
}

/**
 * Check if path is a directory
 */
export async function isDirectory(filePath: string): Promise<boolean> {
  try {
    const stat = await fs.stat(filePath)
    return stat.isDirectory()
  } catch {
    return false
  }
}
