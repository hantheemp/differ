import { ipcMain } from 'electron'
import * as path from 'path'
import { readFileAsText } from '../fs/file'
import { getBaseDir, getTargetDir } from '../state/compareContext'

export function registerFileIpc() {
  ipcMain.handle('read-file', async (_, relativePath, side) => {
    const base = getBaseDir()
    const target = getTargetDir()

    if (!base || !target) {
      throw new Error('Compare context not initialized')
    }

    const fullPath =
      side === 'base' ? path.join(base, relativePath) : path.join(target, relativePath)

    return readFileAsText(fullPath)
  })
}
