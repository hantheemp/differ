import { useState } from 'react'
import { FileCompareResult } from '../../../shared/fileStatus'

export function useDirectoryDiff() {
  const [results, setResults] = useState<FileCompareResult[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function compare(baseDir: string, targetDir: string) {
    try {
      setLoading(true)
      setError(null)

      const data = await window.api.compareDirectories(baseDir, targetDir)
      setResults(data)
    } catch (err) {
      setError('Directory comparison failed')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    results,
    loading,
    error,
    compare
  }
}
