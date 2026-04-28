import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      compare: (baselineDirectory: string, targetDirectory: string) => Promise<CompareResult[]>
    }
  }
}
