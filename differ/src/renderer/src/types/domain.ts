/**
 * Domain types - Shared business logic types
 * Used across multiple components
 */

export type FileStatus = 'modified' | 'added' | 'deleted' | 'unchanged'

export interface TreeNode {
  name: string
  path: string
  isFolder: boolean
  status?: FileStatus
  expanded?: boolean
  children?: TreeNode[]
}

export interface ComparisonResult {
  // To be defined based on comparison logic
  baseline: TreeNode[]
  target: TreeNode[]
  // ... other comparison data
}
