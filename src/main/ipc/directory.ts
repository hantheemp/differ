import { dialog, ipcMain } from 'electron'

export default function registerDirectoryIpc() {
  ipcMain.handle('selectDirectory', async () => {
    const { canceled, filePaths } = await dialog.showOpenDialog({
      properties: ['openDirectory']
    })

    if (!canceled && filePaths.length > 0) {
      return filePaths[0]
    }
    return null
  })
}
