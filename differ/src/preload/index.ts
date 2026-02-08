import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('api', {
  compareDirectories: (base: string, target: string) =>
    ipcRenderer.invoke('compare-directories', base, target),

  readFile: (relativePath: string, side: 'base' | 'target') =>
    ipcRenderer.invoke('read-file', relativePath, side)
})
