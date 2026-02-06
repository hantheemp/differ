import Label from '@renderer/atoms/Label/Label'
import DirectoryInput from '@renderer/molecules/DirectoryInput/DirectoryInput'
import Button from '@renderer/atoms/Button/Button'
import { useDirectoryComparison } from './useDirectoryComparison'

export default function Directory() {
  const {
    baselineDirectory,
    targetDirectory,
    isScanning,
    error,
    handleSelectBaseline,
    handleSelectTarget,
    handleCompare
  } = useDirectoryComparison()

  const canCompare = baselineDirectory && targetDirectory && !isScanning

  return (
    <div className="space-y-4 p-4 rounded shadow-xl">
      <Label className="text-lg font-bold normal-case tracking-normal block mb-4">
        Pick project directories
      </Label>

      {error && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>
      )}

      <DirectoryInput label="Baseline" value={baselineDirectory} onClick={handleSelectBaseline} />
      <DirectoryInput label="Target" value={targetDirectory} onClick={handleSelectTarget} />

      <Button
        onClick={handleCompare}
        className={`btn btn-primary w-full ${!canCompare ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isScanning ? 'Scanning...' : 'Compare'}
      </Button>
    </div>
  )
}
