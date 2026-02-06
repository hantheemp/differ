import type { TreeNode } from './domain'

export interface StoreState {
  baselineDirectory: string
  targetDirectory: string
  treeData: TreeNode[]
  selectedFile: TreeNode | null
  stats: {
    added: number
    modified: number
    deleted: number
    unchanged: number
  }

  setBaselineDirectory: (path: string) => void
  setTargetDirectory: (path: string) => void
  selectFile: (file: TreeNode) => void
  setTreeData: (data: TreeNode[]) => void
  setStats: (stats: { added: number; modified: number; deleted: number; unchanged: number }) => void
}
