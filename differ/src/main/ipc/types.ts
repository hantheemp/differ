export type FileStatus = 'added' | 'modified' | 'deleted' | 'unchanged'

export interface FileResult {
  path: string
  status: FileStatus
  baseline: string | null
  target: string
}

export interface ScanResult {
  files: FileResult[]
  stats: {
    added: number
    modified: number
    deleted: number
    unchanged: number
  }
}

export interface ScanRequest {
  baseline: string
  target: string
}
