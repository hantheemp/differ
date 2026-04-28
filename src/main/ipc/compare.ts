import { ipcMain } from 'electron'
import { compare } from '../services/compare/compare'

export default function registerCompareIpc() {
  ipcMain.handle('compare', async (_event, baselineDirectory: string, targetDirectory: string) => {
    return compare({ baselineDirectory, targetDirectory })
  })
}
