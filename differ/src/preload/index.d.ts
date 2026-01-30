import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      selectDirectory: (type: string) => Promise<string>
      scanFiles: (options: { baseline: string; target: string }) => Promise<any>
      getVersion: () => string
    }
  }
}
