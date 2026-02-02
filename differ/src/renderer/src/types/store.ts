import type { TreeNode } from './domain'

export interface StoreState {
  baselineDirectory: string
  targetDirectory: string
  treeData: TreeNode[]
  selectedFile: TreeNode | null

  setBaselineDirectory: (path: string | null) => void
  setTargetDirectory: (path: string | null) => void
  selectFile: (file: TreeNode) => void
  setTreeData: (data: TreeNode[]) => void
}
