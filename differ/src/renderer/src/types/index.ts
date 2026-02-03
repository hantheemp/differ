/**
 * Central type exports
 * Re-exports all types from domain and store
 */

export * from './domain'
export * from './store'

export type FileStatus = 'added' | 'modified' | 'deleted' | 'unchanged'

export interface TreeNode {
  name: string
  path: string
  isFolder: boolean
  children?: TreeNode[]
  status?: FileStatus
  baseline?: string | null
  target?: string
}

export interface FileResult {
  path: string
  status: FileStatus
  baseline: string | null
  target: string
}

export interface StoreState {
  baselineDirectory: string
  targetDirectory: string
  treeData: TreeNode[]
  selectedFile: TreeNode | null

  setBaselineDirectory: (path: string) => void
  setTargetDirectory: (path: string) => void
  selectFile: (file: TreeNode | null) => void
  setTreeData: (data: TreeNode[]) => void
}
