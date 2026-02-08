import { ElectronAPI } from '@electron-toolkit/preload'

export type IgnorePattern = {
  id: string
  type: 'directory' | 'extension'
  pattern: string
  enabled: boolean
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      compareDirectories: (base: string, target: string) => Promise<FileCompareResult[]>
      readFile: (path: string, side: 'base' | 'target') => Promise<string>

      ignoreLoad: () => Promise<IgnorePattern[]>
      ignoreAdd: (type: 'directory' | 'extension', pattern: string) => Promise<IgnorePattern>
      ignoreRemove: (id: string) => Promise<void>
      ignoreToggle: (id: string) => Promise<void>
      ignoreUpdate: (id: string, updates: Partial<IgnorePattern>) => Promise<void>
      onIgnoreChanged: (callback: () => void) => () => void
    }
  }
}
