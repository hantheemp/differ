import { useStore } from '@renderer/store/useStore'
import CollapsibleTreeItem from '@renderer/molecules/CollapsibleTreeItem/CollapsibleTreeItem'
import { useEffect } from 'react'
import EmptyState from '@renderer/molecules/FileTreeEmptyState/FileTreeEmptyState'
import Label from '@renderer/atoms/Label/Label'
import type { TreeNode } from '@renderer/types'
import type { FileTreeProps } from './types'

const mockTreeData: TreeNode[] = [
  {
    name: 'src',
    path: '/src',
    isFolder: true,
    expanded: true,
    children: [
      {
        name: 'components',
        path: '/src/components',
        isFolder: true,
        expanded: true,
        children: [
          {
            name: 'Button.tsx',
            path: '/src/components/Button.tsx',
            isFolder: false,
            status: 'modified' as const
          },
          {
            name: 'Input.tsx',
            path: '/src/components/Input.tsx',
            isFolder: false,
            status: 'added' as const
          }
        ]
      },
      {
        name: 'utils',
        path: '/src/utils',
        isFolder: true,
        expanded: false,
        children: [
          {
            name: 'helpers.ts',
            path: '/src/utils/helpers.ts',
            isFolder: false,
            status: 'deleted' as const
          }
        ]
      },
      {
        name: 'App.tsx',
        path: '/src/App.tsx',
        isFolder: false,
        status: 'modified' as const
      }
    ]
  },
  {
    name: 'package.json',
    path: '/package.json',
    isFolder: false,
    status: 'modified' as const
  },
  {
    name: 'README.md',
    path: '/README.md',
    isFolder: false,
    status: 'unchanged' as const
  }
]

export default function FileTree({ className = '' }: FileTreeProps) {
  const { treeData, selectedFile, selectFile, setTreeData } = useStore()
  const hasFiles = treeData && treeData.length > 0

  useEffect(() => {
    if (treeData.length === 0) {
      setTreeData(mockTreeData)
    }
  }, [])

  return (
    <div className={`space-y-4 p-4 rounded ${className}`}>
      {hasFiles && (
        <div className="">
          <Label className="text-lg font-semibold">Changed Files</Label>
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
