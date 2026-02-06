export default function TreeItemText({
  children,
  status = 'unchanged',
  className = ''
}: TreeItemTextProps) {
  const statusClasses = {
    modified: 'text-warning',
    added: 'text-success',
    deleted: 'text-error',
    unchanged: 'text-base-content'
  }

  return (
    <span className={`text-sm truncate ${statusClasses[status]} ${className}`}>{children}</span>
  )
}
