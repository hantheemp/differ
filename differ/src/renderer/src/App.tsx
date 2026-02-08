import { useEffect, useState } from 'react'
import FileTree from './components/FileTree'
import MonacoViewer from './components/MonacoViewer'
import IgnoreSettings from './components/IgnoreSettings'
import { useDirectoryDiff } from './hooks/useDirectoryDiff'
import { DiffTreeNode } from 'src/shared/fileStatus'

function App(): React.JSX.Element {
  const { tree, compare } = useDirectoryDiff()
  const [selected, setSelected] = useState<DiffTreeNode | null>(null)
  const [baseDir] = useState('C:/Users/temel/Desktop/testFiles/old')
  const [targetDir] = useState('C:/Users/temel/Desktop/testFiles/new')

  // Initial comparison
  useEffect(() => {
    compare(baseDir, targetDir)
  }, [])

  // Hot reload: Re-compare when ignore patterns change
  useEffect(() => {
    const unsubscribe = window.api.onIgnoreChanged(() => {
      console.log('Ignore patterns changed, re-comparing directories...')
      setSelected(null) // Clear selection
      compare(baseDir, targetDir)
    })

    return unsubscribe
  }, [baseDir, targetDir])

  return (
    <div className="h-screen w-screen flex flex-col bg-base-300">
      {/* Header with ignore settings */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-700">
        <div className="text-white">
          <h1 className="text-lg font-semibold">Directory Diff Tool</h1>
          <p className="text-sm text-gray-400">
            {baseDir} ↔ {targetDir}
          </p>
        </div>
        <IgnoreSettings />
      </div>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        <div className="w-1/4 border-r border-gray-700 p-2 overflow-auto">
          <FileTree nodes={tree} onSelect={setSelected} />
        </div>

        <div className="flex-1">
          <MonacoViewer node={selected} />
        </div>
      </div>
    </div>
  )
}

export default App
