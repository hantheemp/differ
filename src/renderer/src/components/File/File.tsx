import { File as FileIcon } from 'lucide-react'

const statusConfig = {
  modified: { color: 'text-yellow-500', badge: 'M' },
  added: { color: 'text-green-500', badge: 'A' },
  removed: { color: 'text-red-500', badge: 'R' },
  unmodified: { color: 'text-slate-400', badge: 'U' }
}

export default function File({
  fileName,
  status,
  isActive = false,
  onClick
}: FileProps): React.JSX.Element {
  const config = statusConfig[status] ?? statusConfig['unmodified']

  return (
    <div
      onClick={onClick}
      className={`
    flex items-center justify-start rounded cursor-pointer border-l-2 gap-2 transition-colors px-2 py-1
    ${
      isActive
        ? 'bg-white/8 border-l-blue-400 text-white'
        : 'border-l-transparent hover:bg-white/5 text-slate-400 hover:text-white'
    }
    ${status === 'removed' ? 'opacity-70' : ''}
  `}
    >
      <FileIcon size={14} className="shrink-0" />
      <span
        className={`truncate font-mono text-sm flex-1 ${status === 'removed' ? 'line-through' : ''}`}
      >
        {fileName}
      </span>
      <span className={`text-[10px] font-bold shrink-0 ${config.color}`}>{config.badge}</span>
    </div>
  )
}
