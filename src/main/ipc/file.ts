import { ipcMain } from 'electron'
import { doesFileExist, readFile } from '../services/file/file'

export default function registerFileIpc() {
  ipcMain.handle('doesFileExist', async (_, filePath: string) => {
    return await doesFileExist(filePath)
  })
  ipcMain.handle('readFile', async (_, filePath: string) => {
    return await readFile(filePath)
  })
}
