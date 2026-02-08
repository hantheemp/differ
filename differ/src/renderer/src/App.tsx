import { useEffect, useState } from 'react'
import FileTree from './components/FileTree'
import MonacoViewer from './components/MonacoViewer'
import { useDirectoryDiff } from './hooks/useDirectoryDiff'
import { DiffTreeNode } from 'src/shared/fileStatus'

function App(): React.JSX.Element {
  const { tree, compare } = useDirectoryDiff()
  const [selected, setSelected] = useState<DiffTreeNode | null>(null)

  useEffect(() => {
    compare('C:/Users/temel/Desktop/testFiles/old', 'C:/Users/temel/Desktop/testFiles/new')
  }, [])

  return (
    <div className="h-screen w-screen flex bg-base-300">
      <div className="w-1/4 border-r p-2 overflow-auto">
        <FileTree nodes={tree} onSelect={setSelected} />
      </div>

      <div className="flex-1">
        <MonacoViewer node={selected} />
      </div>
    </div>
  )
}

export default App
