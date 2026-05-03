import { compare as dirCompare } from 'dir-compare'
import path from 'path'
import crypto from 'crypto'
import { monacoCompatibleCompare } from './compareFileAsync'

export async function compare({
  baselineDirectory,
  targetDirectory,
  excludeFilter
}: CompareInputProps): Promise<CompareResult> {
  try {
    const res = await dirCompare(baselineDirectory, targetDirectory, {
      compareContent: true,
      compareSize: false,
      compareDate: false,
      ignoreLineEnding: true,
      ignoreWhiteSpaces: true,
      excludeFilter: excludeFilter,
      compareFileAsync: monacoCompatibleCompare.compareAsync
    })

    if (!res.diffSet || res.same) {
      console.log('No differences found.')
      return {
        files: [],
        totalFiles: 0,
        totalAdded: 0,
        totalRemoved: 0,
        totalModified: 0,
        totalUnmodified: 0
      }
    }

    const mappedFiles: FileNode[] = res.diffSet.map((diff) => {
      let status: FileNode['status'] = 'unmodified'

      if (diff.state === 'distinct') status = 'modified'
      else if (diff.state === 'left') status = 'removed'
      else if (diff.state === 'right') status = 'added'

      if (diff.type1 !== 'directory' || diff.type2 === 'directory') {
        return {
          id: crypto.randomUUID(),
          name: diff.name1 || diff.name2 || 'File',
          relativePath: diff.relativePath || '',
          status,
          originalPath: diff.path1 && diff.name1 ? path.join(diff.path1, diff.name1) : null,
          modifiedPath: diff.path2 && diff.name2 ? path.join(diff.path2, diff.name2) : null,
          isDirectory: diff.type1 === 'directory' || diff.type2 === 'directory'
        }
      } else {
        return {
          id: crypto.randomUUID(),
          name: diff.name1 || diff.name2 || 'Directory',
          relativePath: diff.relativePath || '',
          status,
          originalPath: diff.path1 && diff.name1 ? path.join(diff.path1, diff.name1) : null,
          modifiedPath: diff.path2 && diff.name2 ? path.join(diff.path2, diff.name2) : null,
          isDirectory: true
        }
      }
    })

    const visibleFiles = mappedFiles.filter((f) => !f.isDirectory)

    return {
      files: mappedFiles.sort((a, b) => a.status.localeCompare(b.status)),
      totalFiles: visibleFiles.length,
      totalAdded: visibleFiles.filter((f) => f.status === 'added').length,
      totalRemoved: visibleFiles.filter((f) => f.status === 'removed').length,
      totalModified: visibleFiles.filter((f) => f.status === 'modified').length,
      totalUnmodified: visibleFiles.filter((f) => f.status === 'unmodified').length
    }
  } catch (error: any) {
    console.error('Error occured while comparing directories:', error)
    throw new Error(
      'Error occured while comparing directories. Contact support if the issue persists.'
    )
  }
}
