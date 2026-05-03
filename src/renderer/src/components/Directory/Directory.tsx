import { Play } from 'lucide-react'
import Button from '../Button/Button'
import DirectoryPicker from '../DirectoryPicker/DirectoryPicker'
import { useDirectoryStore } from '@renderer/store/DirectoryStore/useDirectoryStore'

export default function Directory(): React.JSX.Element {

  const { baselinePath, targetPath, trigger,  setBaselinePath, setTargetPath, setTrigger } = useDirectoryStore()

  const handleBrowse = async (type : 'baseline' | 'target') => {
    const selectedPath = await window.api.selectDirectory()
  
    if (selectedPath) {
      if (type === 'baseline') {
        setBaselinePath(selectedPath)
      } else {
        setTargetPath(selectedPath)
      }
    }

  }

  return (
    <div className="flex items-end gap-4 px-4 py-3 border-b border-border-dark bg-background-dark shrink-0">
      <DirectoryPicker
        placeholder="/path/to/baseline/project"
        value={baselinePath || ""}
        onBrowse={() => handleBrowse('baseline')}
      />
      <DirectoryPicker
        placeholder="/path/to/target/project"
        value={targetPath || ""}
        onBrowse={() => handleBrowse('target')}
      />
      <Button
        text="Run Diff"
        logo={<Play size={16} />}
        onClick={setTrigger}
        variant="primary"
        className="shrink-0"
        disabled={!baselinePath || !targetPath}
      />
    </div>
  )
}