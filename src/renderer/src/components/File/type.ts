type FileStatus = 'added' | 'removed' | 'modified' | 'unmodified'

interface FileProps {
  fileName: string
  status: FileStatus
  isActive?: boolean
  onClick?: () => void
}