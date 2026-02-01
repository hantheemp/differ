import type { TreeNode } from '@renderer/types'

export interface CollapsibleTreeItemProps {
  node: TreeNode
  depth: number
  selectedPath?: string
  onSelect: (node: TreeNode) => void
}
