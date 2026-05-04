import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      compare: (baselineDirectory: string, targetDirectory: string) => Promise<CompareResult>
      selectDirectory: () => Promise<string | null>
      doesFileExist: (filePath: string) => Promise<boolean>
      readFile: (filePath: string) => Promise<string>
      loadFilters: () => Promise<FilterRule[]>
      saveFilters: (filters: FilterRule[]) => Promise<void>
    }
  }
}
