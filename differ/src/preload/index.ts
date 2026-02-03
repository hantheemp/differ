import { app, BrowserWindow } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { registerIpcHandlers } from '../main/ipc/handlers'
/**
 * Application entry point
 */
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Watch window shortcuts in development
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // Create main window and register handlers
  const mainWindow = createMainWindow()
  registerIpcHandlers(mainWindow)

  // Handle macOS activation
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      const window = createMainWindow()
      registerIpcHandlers(window)
    }
  })
})

/**
 * Quit when all windows are closed (except on macOS)
 */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
