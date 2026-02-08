import { useState } from 'react'
import { FileCompareResult, DiffTreeNode } from 'src/shared/fileStatus'
import { buildDiffTree } from '../utils/buildDiffTree'

export function useDirectoryDiff() {
  const [results, setResults] = useState<FileCompareResult[]>([])
  const [tree, setTree] = useState<DiffTreeNode[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function compare(baseDir: string, targetDir: string) {
    try {
      setLoading(true)
      setError(null)

      const data = await window.api.compareDirectories(baseDir, targetDir)

      const meaningful = data.filter((d) => d.status !== 'unchanged')

      setResults(meaningful)
      setTree(buildDiffTree(meaningful))
    } catch (err) {
      setError('Directory comparison failed')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    results,
    tree,
    loading,
    error,
    compare
  }
}
