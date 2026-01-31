import Icon from '@renderer/atoms/Icon/Icon'
import TreeItemText from '@renderer/atoms/TreeItemText/TreeItemText'

interface TreeItemProps {
  name: string
  iconName: string
  isFolder: boolean
  isExpanded?: boolean
  isSelected?: boolean
  status?: 'modified' | 'added' | 'deleted' | 'unchanged'
  depth: number
  onClick: () => void
}

export default function TreeItem({
  name,
  iconName,
  isFolder,
  isExpanded = false,
  isSelected = false,
  status = 'unchanged',
  depth,
  onClick
}: TreeItemProps) {
  return (
    <div
      className={`
        flex items-center gap-1 px-2 py-1.5 cursor-pointer
        hover:bg-base-200 transition-colors rounded
        ${isSelected ? 'bg-primary text-primary-content' : ''}
      `}
      style={{ paddingLeft: `${depth * 12 + 8}px` }}
      onClick={onClick}
    >
      {isFolder && (
        <Icon
          name="ChevronRight"
          size={14}
          className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`}
        />
      )}
      <Icon name={iconName as any} size={16} />
      <TreeItemText status={isSelected ? 'unchanged' : status}>{name}</TreeItemText>
    </div>
  )
}
