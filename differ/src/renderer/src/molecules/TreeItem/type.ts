import type { FileStatus } from '@renderer/types'

export interface TreeItemProps {
  name: string
  iconName: string
  isFolder: boolean
  isExpanded?: boolean
  isSelected?: boolean
  status?: FileStatus
  depth: number
  onClick: () => void
}
