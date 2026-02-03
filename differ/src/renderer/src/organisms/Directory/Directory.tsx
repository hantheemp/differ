import { useStore } from '@renderer/store/useStore'
import Label from '@renderer/atoms/Label/Label'
import DirectoryInput from '@renderer/molecules/DirectoryInput/DirectoryInput'
import Button from '@renderer/atoms/Button/Button'

export default function Directory() {
  const { baselineDirectory, targetDirectory, setBaselineDirectory, setTargetDirectory } =
    useStore()

  const handleSelectBaseline = async () => {
    try {
      const path = await window.api.selectDirectory('baseline')
      if (path) {
        setBaselineDirectory(path)
      }
    } catch (error) {
      console.error('Error selecting baseline directory:', error)
    }
  }

  const handleSelectTarget = async () => {
    try {
      const path = await window.api.selectDirectory('target')
      if (path) {
        setTargetDirectory(path)
      }
    } catch (error) {
      console.error('Error selecting target directory:', error)
    }
  }

  const canCompare = baselineDirectory && targetDirectory

  return (
    <div className="space-y-4 p-4 rounded shadow-xl">
      <Label className="text-lg font-bold normal-case tracking-normal block mb-4">
        Pick project directories
      </Label>
      <DirectoryInput label="Baseline" value={baselineDirectory} onClick={handleSelectBaseline} />
      <DirectoryInput label="Target" value={targetDirectory} onClick={handleSelectTarget} />
      <Button
        className={`btn btn-primary w-full ${!canCompare ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Compare
      </Button>
    </div>
  )
}
