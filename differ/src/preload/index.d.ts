import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      selectDirectory: (type: 'baseline' | 'target') => Promise<string | null>
    }
  }
}
