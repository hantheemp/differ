import { contextBridge, ipcRenderer } from 'electron'

// Expose protected methods to renderer process
contextBridge.exposeInMainWorld('api', {
  selectDirectory: (type: 'baseline' | 'target') => ipcRenderer.invoke('select-directory', type),

  scanFiles: (baseline: string, target: string) =>
    ipcRenderer.invoke('scan-files', { baseline, target })
})
