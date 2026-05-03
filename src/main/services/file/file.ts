import { promises } from 'fs'

export async function doesFileExist(filePath: string): Promise<boolean> {
  try {
    await promises.access(filePath)
    return true
  } catch (error: any) {
    return false
  }
}

export async function readFile(filePath: string): Promise<string> {
  try {
    return await promises.readFile(filePath, 'utf-8')
  } catch (error: any) {
    console.error('Error reading file:', error)
    return ''
  }
}