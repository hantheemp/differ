import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('api', {
  compareDirectories: (base: string, target: string) =>
    ipcRenderer.invoke('compare-directories', base, target),

  readFile: (relativePath: string, side: 'base' | 'target') =>
    ipcRenderer.invoke('read-file', relativePath, side),

  ignoreLoad: () => ipcRenderer.invoke('ignore-load'),

  ignoreAdd: (type: 'directory' | 'extension', pattern: string) =>
    ipcRenderer.invoke('ignore-add', type, pattern),

  ignoreRemove: (id: string) => ipcRenderer.invoke('ignore-remove', id),

  ignoreToggle: (id: string) => ipcRenderer.invoke('ignore-toggle', id),

  ignoreUpdate: (id: string, updates: any) => ipcRenderer.invoke('ignore-update', id, updates),

  onIgnoreChanged: (callback: () => void) => {
    const listener = () => callback()
    ipcRenderer.on('ignore-changed', listener)
    return () => ipcRenderer.removeListener('ignore-changed', listener)
  }
})
