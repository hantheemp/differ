import { useState } from 'react'
import { ComparedFile } from './type'

export default function useCompare() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<CompareResult>({
    files: [],
    totalFiles: 0,
    totalAdded: 0,
    totalRemoved: 0,
    totalModified: 0,
    totalUnmodified: 0
  })

  async function compare(baseDirectory: string, targetDirectory: string) {
    try {
      setLoading(true)
      setError(null)
      const data = await window.api.compare(baseDirectory, targetDirectory)
      setResult(data)
      console.log(data)
    } catch (error: any) {
      setError(
        'Error occured while comparing directories. Please check the console for more details.'
      )
    } finally {
      setLoading(false)
    }
  }

  return { result, loading, error, compare }
}
