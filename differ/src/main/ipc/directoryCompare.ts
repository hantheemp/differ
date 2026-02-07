import { ipcMain } from 'electron'
import { compareDirectories } from '../services/directoryCompare'

export function registerCompareIpc() {
  ipcMain.handle('compare-directories', async (_event, baseDir: string, targetDir: string) => {
    return compareDirectories(baseDir, targetDir)
  })
}
