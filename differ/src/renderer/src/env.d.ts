/// <reference types="vite/client" />

interface Window {
  api: {
    selectDirectory: (type: 'baseline' | 'target') => Promise<string | null>
    scanFiles: (
      baseline: string,
      target: string
    ) => Promise<{
      files: Array<{
        path: string
        status: 'added' | 'modified' | 'deleted' | 'unchanged'
        baseline: string | null
        target: string
      }>
      stats: {
        added: number
        modified: number
        deleted: number
        unchanged: number
      }
    }>
  }
}
