import { useStore } from '@renderer/store/useStore'
import CollapsibleTreeItem from '@renderer/molecules/CollapsibleTreeItem/CollapsibleTreeItem'
import EmptyState from '@renderer/molecules/FileTreeEmptyState/FileTreeEmptyState'
import Label from '@renderer/atoms/Label/Label'
import type { FileTreeProps } from './types'
import { Badge } from '@renderer/atoms/Badge/Badge'

export default function FileTree({ className = '' }: FileTreeProps) {
  const { treeData, selectedFile, selectFile, stats } = useStore()
  const hasFiles = treeData && treeData.length > 0

  // Log tree data for debugging
  console.log('FileTree rendering with', treeData.length, 'root nodes')

  return (
    <div className={`space-y-4 p-4 rounded ${className}`}>
      {hasFiles && (
        <div className="">
          <Label className="text-lg font-semibold">Changed Files</Label>
          <div className="flex gap-1.5 mt-4">
            {stats.added > 0 && <Badge status="ADDED" count={stats.added} />}
            {stats.modified > 0 && <Badge status="MODIFIED" count={stats.modified} />}
            {stats.deleted > 0 && <Badge status="DELETED" count={stats.deleted} />}
            {stats.unchanged > 0 && <Badge status="UNCHANGED" count={stats.unchanged} />}
          </div>
        </div>
      )}

      <div className="">
        {hasFiles ? (
          treeData.map((node, index) => (
            <CollapsibleTreeItem
              key={node.path || index}
              node={node}
              depth={0}
              selectedPath={selectedFile?.path}
              onSelect={selectFile}
            />
          ))
        ) : (
          <EmptyState
            title="No Files to Display"
            description="Select baseline and target directories, then click Compare to see changed files"
          />
        )}
      </div>
    </div>
  )
}
