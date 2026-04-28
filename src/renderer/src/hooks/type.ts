export interface ComparedFile {
  id: string
  name: string
  relativePath: string
  status: 'unmodified' | 'added' | 'removed' | 'modified'
  originalPath: string | null
  modifiedPath: string | null
  isDirectory: boolean
}