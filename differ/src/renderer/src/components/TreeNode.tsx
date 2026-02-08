import { useState } from 'react'
import { DiffTreeNode } from 'src/shared/fileStatus'

type Props = {
  node: DiffTreeNode
  level: number
  onSelect: (node: DiffTreeNode) => void
}

export default function TreeNode({ node, level, onSelect }: Props) {
  const [expanded, setExpanded] = useState(true)

  const isDirectory = node.type === 'directory'

  return (
    <div>
      <div
        className="flex items-center gap-1 cursor-pointer text-sm"
        style={{ paddingLeft: level * 12 }}
        onClick={() => {
          if (isDirectory) {
            setExpanded(!expanded)
          } else {
            onSelect(node)
          }
        }}
      >
        <span>{isDirectory ? (expanded ? '📂' : '📁') : '📄'}</span>

        <span
          className={
            node.status === 'added'
              ? 'text-green-400'
              : node.status === 'removed'
                ? 'text-red-400'
                : node.status === 'modified'
                  ? 'text-yellow-400'
                  : ''
          }
        >
          {node.name}
        </span>
      </div>

      {expanded &&
        node.children?.map((child) => (
          <TreeNode key={child.path} node={child} level={level + 1} onSelect={onSelect} />
        ))}
    </div>
  )
}
