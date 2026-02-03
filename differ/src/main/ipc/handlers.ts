import { BrowserWindow, dialog, ipcMain } from 'electron'
import { ScanRequest, ScanResult } from './types'
import { scanDirectories } from '../services/fileScanner'

export function registerIpcHandlers(mainWindow: BrowserWindow): void {
  console.log('Registering IPC handlers...')

  ipcMain.handle('select-directory', async (_event, type: 'baseline' | 'target') => {
    const result = await dialog.showOpenDialog(mainWindow, {
      properties: ['openDirectory'],
      title: `Select ${type === 'baseline' ? 'Baseline' : 'Target'} Directory`
    })

    if (result.canceled) return null
    return result.filePaths[0]
  })

  ipcMain.handle('scan-files', async (_event, request: ScanRequest): Promise<ScanResult> => {
    console.log('scan-files called:', request)

    try {
      return await scanDirectories(request.baseline, request.target)
    } catch (error) {
      throw error
    }
  })
}
