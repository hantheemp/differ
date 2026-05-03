import { useState } from 'react'
import { CompareResult } from './type'
import { useCompareStore } from '@renderer/store/CompareStore/useCompareStore'

export default function useCompare() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [result, setResult] = useState<CompareResult>({
    files: []
  })

  async function compare(baseDirectory: string, targetDirectory: string) {
    try {
      const startTime = performance.now()

      setLoading(true)
      setError(null)

      const data = await window.api.compare(baseDirectory, targetDirectory)

      const endTime = performance.now()
      useCompareStore.getState().setCompareTime(Math.round(endTime - startTime))
      useCompareStore.getState().setTotalFiles(data.totalFiles)
      useCompareStore.getState().setTotalAdded(data.totalAdded)
      useCompareStore.getState().setTotalRemoved(data.totalRemoved)
      useCompareStore.getState().setTotalModified(data.totalModified)
      useCompareStore.getState().setTotalUnmodified(data.totalUnmodified)

      setResult(data)
    } catch (error: any) {
      console.error(error)
      setError(
        'Error occured while comparing directories. Please check the console for more details.'
      )
    } finally {
      setLoading(false)
    }
  }

  return { result, loading, error, compare }
}
