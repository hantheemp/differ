import { DiffTreeNode } from 'src/shared/fileStatus'
import TreeNode from './TreeNode'

type FileTreeProps = {
  nodes: DiffTreeNode[]
  onSelect: (node: DiffTreeNode) => void
}

export default function FileTree({ nodes, onSelect }: FileTreeProps) {
  if (!nodes.length) {
    return <div className="text-sm text-gray-400">No differences found</div>
  }

  return (
    <div className="w-72 overflow-auto select-none">
      {nodes.map((node) => (
        <TreeNode key={node.path} node={node} onSelect={onSelect} level={0} />
      ))}
    </div>
  )
}
