export interface FileNode {
  id: string
  name: string
  relativePath: string
  status: 'unmodified' | 'added' | 'removed' | 'modified'
  originalPath: string | null
  modifiedPath: string | null
  isDirectory: boolean
}

interface CompareResult {
  files: FileNode[]
  totalFiles: number
  totalAdded: number
  totalRemoved: number
  totalModified: number
  totalUnmodified: number
}