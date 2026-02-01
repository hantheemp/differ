/**
 * Store types - Global state management types
 */

import type { TreeNode } from './domain'

export interface StoreState {
  baselineDirectory: string
  targetDirectory: string
  treeData: TreeNode[]
  selectedFile: TreeNode | null

  setBaselineDirectory: (path: string) => void
  setTargetDirectory: (path: string) => void
  selectFile: (file: TreeNode) => void
  setTreeData: (data: TreeNode[]) => void
}
