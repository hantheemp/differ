import { useState } from 'react'
import { useStore } from '@renderer/store/useStore'
import Label from '@renderer/atoms/Label/Label'
import DirectoryInput from '@renderer/molecules/DirectoryInput/DirectoryInput'
import Button from '@renderer/atoms/Button/Button'
import { buildTreeFromFiles } from '@renderer/utils/fileTreeBuilder'

export default function Directory() {
  const {
    baselineDirectory,
    targetDirectory,
    setBaselineDirectory,
    setTargetDirectory,
    setTreeData
  } = useStore()

  const [isScanning, setIsScanning] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSelectBaseline = async () => {
    try {
      const path = await window.api.selectDirectory('baseline')
      if (path) {
        setBaselineDirectory(path)
        setError(null)
      }
    } catch (error) {
      console.error('Error selecting baseline directory:', error)
      setError('Failed to select baseline directory')
    }
  }

  const handleSelectTarget = async () => {
    try {
      const path = await window.api.selectDirectory('target')
      if (path) {
        setTargetDirectory(path)
        setError(null)
      }
    } catch (error) {
      console.error('Error selecting target directory:', error)
      setError('Failed to select target directory')
    }
  }

  const handleCompare = async () => {
    if (!baselineDirectory || !targetDirectory) return

    setIsScanning(true)
    setError(null)

    try {
      console.log('Starting comparison...')
      const result = await window.api.scanFiles(baselineDirectory, targetDirectory)

      console.log('Scan complete:', result.stats)
      console.log(
        'Sample file paths:',
        result.files.slice(0, 3).map((f) => f.path)
      )

      // Transform flat file list to tree structure
      const treeData = buildTreeFromFiles(result.files)

      console.log('Tree data created:', treeData.length, 'root nodes')
      console.log('First root node:', treeData[0])

      setTreeData(treeData)

      console.log(`Found ${result.files.length} files:`, {
        added: result.stats.added,
        modified: result.stats.modified,
        deleted: result.stats.deleted,
        unchanged: result.stats.unchanged
      })
    } catch (error) {
      console.error('Error scanning directories:', error)
      setError('Failed to compare directories. Please check the console for details.')
    } finally {
      setIsScanning(false)
    }
  }

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
