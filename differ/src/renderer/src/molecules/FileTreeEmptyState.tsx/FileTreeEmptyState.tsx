import { FolderOpen } from 'lucide-react'

interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description: string
}

export default function EmptyState({
  icon = <FolderOpen className="w-16 h-16 opacity-50" />,
  title,
  description
}: EmptyStateProps) {
  return (
    <div className="flex items-center justify-center h-full px-6 py-12">
      <div className="text-center space-y-3">
        <div className="text-base-content/50 flex justify-center">{icon}</div>
        <h3 className="text-base-content font-semibold text-sm">{title}</h3>
        <p className="text-base-content/60 text-xs max-w-xs">{description}</p>
      </div>
    </div>
  )
}
