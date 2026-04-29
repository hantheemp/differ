import { useEffect } from 'react'
import useCompare from '@renderer/hooks/useCompare'
import File from '../File/File'

export default function FileTree(): React.JSX.Element {
  const { result, loading, error, compare } = useCompare()

  useEffect(() => {
    compare('C:/Users/temel/Desktop/testFiles/old', 'C:/Users/temel/Desktop/testFiles/new')
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <aside className="w-72 bg-surface-dark border-r border-border-dark flex flex-col shrink-0 h-full">
      <div className="p-3 border-b border-border-dark flex justify-between items-center">
        <h3 className="text-sm font-semibold text-slate-300">Changed Files</h3>
        <div className="flex gap-1">
          <span className="text-xs px-1.5 py-0.5 rounded bg-green-900/40 text-green-400 border border-green-900/50">
            {result.totalAdded} A
          </span>
          <span className="text-xs px-1.5 py-0.5 rounded bg-red-900/40 text-red-400 border border-red-900/50">
            {result.totalRemoved} R
          </span>
          <span className="text-xs px-1.5 py-0.5 rounded bg-yellow-900/40 text-yellow-400 border border-yellow-900/50">
            {result.totalModified} M
          </span>
        </div>
      </div>
      <div className="overflow-y-auto flex-1 p-2 space-y-0.5">
        {result.files.map((file) => (
          !file.isDirectory && <File key={file.id} fileName={file.name} status={file.status} />
        ))}
      </div>
    </aside>
  )
}
