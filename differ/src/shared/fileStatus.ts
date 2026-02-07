export type FileStatus = 'added' | 'removed' | 'modified' | 'unchanged'

export type FileCompareResult = {
  path: string
  status: FileStatus
}
