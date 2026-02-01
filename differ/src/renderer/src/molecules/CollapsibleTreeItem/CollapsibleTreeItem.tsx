import { useState } from 'react'
import TreeItem from '@renderer/molecules/TreeItem/TreeItem'
import type { CollapsibleTreeItemProps } from './type'

export default function CollapsibleTreeItem({
  node,
  depth,
  selectedPath,
  onSelect
}: CollapsibleTreeItemProps) {
  const [isExpanded, setIsExpanded] = useState(node.expanded ?? true)
  const isSelected = selectedPath === node.path && !node.isFolder

  const handleClick = () => {
    if (node.isFolder) {
      setIsExpanded(!isExpanded)
    } else {
      onSelect(node)
    }
  }

  return (
    <>
      <TreeItem
        name={node.name}
        iconName={node.isFolder ? 'Folder' : 'File'}
        isFolder={node.isFolder}
        isExpanded={isExpanded}
        isSelected={isSelected}
        status={node.status}
        depth={depth}
        onClick={handleClick}
      />

      {node.isFolder && isExpanded && node.children && (
        <div>
          {node.children.map((child, index) => (
            <CollapsibleTreeItem
              key={child.path || index}
              node={child}
              depth={depth + 1}
              selectedPath={selectedPath}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </>
  )
}
