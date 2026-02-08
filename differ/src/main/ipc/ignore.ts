import { ipcMain, BrowserWindow } from 'electron'
import {
  loadIgnoreConfig,
  addIgnorePattern,
  removeIgnorePattern,
  toggleIgnorePattern,
  updateIgnorePattern,
  IgnorePattern
} from '../services/ignore'
import { getBaseDir } from '../state/compareContext'

export function registerIgnoreIpc() {
  ipcMain.handle('ignore-load', async () => {
    const baseDir = getBaseDir()
    if (!baseDir) {
      throw new Error('No base directory set')
    }
    const config = await loadIgnoreConfig()
    return config.patterns
  })

  ipcMain.handle('ignore-add', async (_event, type: 'directory' | 'extension', pattern: string) => {
    const baseDir = getBaseDir()
    if (!baseDir) {
      throw new Error('No base directory set')
    }
    const newPattern = await addIgnorePattern(type, pattern)

    BrowserWindow.getAllWindows().forEach((win) => {
      win.webContents.send('ignore-changed')
    })

    return newPattern
  })

  ipcMain.handle('ignore-remove', async (_event, id: string) => {
    const baseDir = getBaseDir()
    if (!baseDir) {
      throw new Error('No base directory set')
    }
    await removeIgnorePattern(id)

    BrowserWindow.getAllWindows().forEach((win) => {
      win.webContents.send('ignore-changed')
    })
  })

  ipcMain.handle('ignore-toggle', async (_event, id: string) => {
    const baseDir = getBaseDir()
    if (!baseDir) {
      throw new Error('No base directory set')
    }
    await toggleIgnorePattern(id)

    BrowserWindow.getAllWindows().forEach((win) => {
      win.webContents.send('ignore-changed')
    })
  })

  ipcMain.handle('ignore-update', async (_event, id: string, updates: Partial<IgnorePattern>) => {
    const baseDir = getBaseDir()
    if (!baseDir) {
      throw new Error('No base directory set')
    }
    await updateIgnorePattern(id, updates)

    BrowserWindow.getAllWindows().forEach((win) => {
      win.webContents.send('ignore-changed')
    })
  })
}
