import { compare as dirCompare } from 'dir-compare'
import path from 'path'
import crypto from 'crypto'
import { getFormattedExcludeFilter, loadFiltersFromFile } from '../filter/filter'
import fs from 'fs'

export async function compare({
  baselineDirectory,
  targetDirectory
}: CompareInputProps): Promise<CompareResult> {
  try {
    const currentFilters = await loadFiltersFromFile()

    const excludeFilterString = getFormattedExcludeFilter(currentFilters)

    const res = await dirCompare(baselineDirectory, targetDirectory, {
      compareContent: true,
      compareSize: false,
      compareDate: false,
      compareFileAsync: async (path1, _stat1, path2, _stat2) => {
        const normalize = (filePath: string) =>
          fs
            .readFileSync(filePath, 'utf-8')
            .split(/\r?\n/)
            .map((line) => line.trimEnd())
            .join('\n')
            .trim()

        return normalize(path1) === normalize(path2)
      },
      excludeFilter: excludeFilterString
    })

    if (!res.diffSet || res.same) {
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
