import { ipcMain } from 'electron'
import { compareDirectories } from '../services/directory'
import { setCompareContext } from '../state/compareContext'

export function registerDirectoryIpc() {
  ipcMain.handle('compare-directories', async (_event, baseDir: string, targetDir: string) => {
    setCompareContext(baseDir, targetDir)
    return compareDirectories(baseDir, targetDir)
  })
}
