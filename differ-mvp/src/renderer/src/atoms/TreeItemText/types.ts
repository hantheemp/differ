interface TreeItemTextProps {
  children: React.ReactNode
  status?: 'modified' | 'added' | 'deleted' | 'unchanged'
  className?: string
}
