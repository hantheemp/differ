export function Badge({ status, count }) {
  const statusStyles = {
    ADDED: 'bg-green-900/40 text-green-400 border-green-900/50',
    MODIFIED: 'bg-yellow-900/40 text-yellow-400 border-yellow-900/50',
    DELETED: 'bg-red-900/40 text-red-400 border-red-900/50',
    UNCHANGED: 'bg-slate-900/40 text-slate-400 border-slate-900/50'
  }

  const statusLabels = {
    ADDED: 'A',
    MODIFIED: 'M',
    DELETED: 'D',
    UNCHANGED: 'U'
  }

  return (
    <span className={`badge badge-sm ${statusStyles[status]}`}>
      {count} {statusLabels[status]}
    </span>
  )
}
