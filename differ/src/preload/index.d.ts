import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      compareDirectories: (base: string, target: string) => Promise<FileCompareResult[]>
    }
  }
}
