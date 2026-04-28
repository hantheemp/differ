interface CompareInputProps {
    baselineDirectory: string;
    targetDirectory: string;
    excludeFilter?: string;
}

interface FileNode {
  name: string
  relativePath: string
  status: 'unmodified' | 'modified' | 'added' | 'removed'
  originalPath: string | null
  modifiedPath: string | null
  isDirectory: boolean
}