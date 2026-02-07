import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('api', {
  compareDirectories: (baseDir: string, targetDir: string) =>
    ipcRenderer.invoke('compare-directories', baseDir, targetDir)
})
