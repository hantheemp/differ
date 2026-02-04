import { useState } from 'react'
import { useStore } from '@renderer/store/useStore'
import { buildTreeFromFiles } from '@renderer/utils/fileTreeBuilder'

export function useDirectoryComparison() {
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

  return {
    baselineDirectory,
    targetDirectory,
    isScanning,
    error,
    handleSelectBaseline,
    handleSelectTarget,
    handleCompare
  }
}
