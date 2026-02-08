import { promises as fs } from 'fs'
import * as crypto from 'crypto'

export async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

export async function getFileHash(filePath: string): Promise<string> {
  try {
    const buffer = await fs.readFile(filePath)

    if (buffer.includes(0)) {

      return crypto.createHash('sha256').update(buffer).digest('hex')
    }
    
    const content = buffer.toString('utf-8').replace(/\r\n/g, '\n')
    return crypto.createHash('sha256').update(content).digest('hex')
  } catch (error) {
    console.error(`Error hashing file ${filePath}:`, error)
    return ''
  }
}

export async function readFile(filePath: string): Promise<Buffer> {
  return await fs.readFile(filePath)
}

export async function readFileAsText(filePath: string): Promise<string> {
  const buffer = await fs.readFile(filePath)
  if (buffer.includes(0)) {
    return '[Binary file]'
  }
  return buffer.toString('utf-8')
}

export async function isDirectory(filePath: string): Promise<boolean> {
  try {
    const stat = await fs.stat(filePath)
    return stat.isDirectory()
  } catch {
    return false
  }
}
