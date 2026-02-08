export type FileStatus = 'added' | 'removed' | 'modified' | 'unchanged'

export type FileCompareResult = {
  path: string
  status: FileStatus
}

export type DiffTreeNode = {
  name: string
  path: string
  type: 'file' | 'directory'
  status?: FileStatus
  children?: DiffTreeNode[]
}
