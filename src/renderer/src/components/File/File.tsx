import { File as FileIcon} from 'lucide-react';

const statusConfig = {
  modified:   { color: 'text-yellow-500', badge: 'M' },
  added:      { color: 'text-green-500',  badge: 'A' },
  removed:    { color: 'text-red-500',    badge: 'R' },
  unmodified: { color: 'text-slate-400',  badge: 'U' },
}

export default function File({ fileName, status, isActive = false, onClick }: FileProps): React.JSX.Element {
  const config = statusConfig[status] ?? statusConfig['unmodified']

  return (
    <div
      onClick={onClick}
      className={`
        flex items-center justify-between rounded cursor-pointer border gap-3 transition-colors
        ${isActive
          ? 'bg-primary/20 text-white border-primary/20'
          : 'hover:bg-white/5 border-transparent text-slate-300 hover:text-white'
        }
        ${status === 'removed' ? 'opacity-70' : ''}
      `}
    >
    <div>
        <FileIcon />
    </div>
      <span className={`truncate font-mono ${status === 'removed' ? 'line-through' : ''}`}>
        {fileName}
      </span>
      <span className={`text-[10px] font-bold shrink-0 px-1 ${config.color}`}>
        {config.badge}
      </span>
    </div>
  )
}