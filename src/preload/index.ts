import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  compare: async (baselineDirectory: string, targetDirectory: string) => {
    return ipcRenderer.invoke('compare', baselineDirectory, targetDirectory)
  },
  selectDirectory: () => ipcRenderer.invoke('selectDirectory'),
  doesFileExist: (filePath: string) => ipcRenderer.invoke('doesFileExist', filePath),
  readFile: (filePath: string) => ipcRenderer.invoke('readFile', filePath),
  loadFilters: () => ipcRenderer.invoke('loadFilters'),
  saveFilters: (filters) => ipcRenderer.invoke('saveFilters', filters)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
