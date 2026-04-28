export type FileStatus = 'added' | 'removed' | 'modified' | 'unchanged'

export type CompareResult = {
  path: string
  status: FileStatus
}