import { compare as dirCompare } from 'dir-compare'
import path from 'path'
import crypto from 'crypto'

export async function compare({
  baselineDirectory,
  targetDirectory,
  excludeFilter
}: CompareInputProps): Promise<FileNode[]> {
  try {
    const res = await dirCompare(baselineDirectory, targetDirectory, {
      compareSize: true,
      compareContent: true,
      compareDate: true,
      excludeFilter: excludeFilter
    })

    if (!res.diffSet || res.same) {
      console.log('No differences found.')
      return []
    }

    const mappedFiles: FileNode[] = res.diffSet.map((diff) => {
      let status: FileNode['status'] = 'unmodified'

      if (diff.state === 'distinct') status = 'modified'
      else if (diff.state === 'left') status = 'removed'
      else if (diff.state === 'right') status = 'added'

      if (diff.type1 === 'directory' || diff.type2 === 'directory') {
        
      }

      return {
        id: crypto.randomUUID(),
        name: diff.name1 || diff.name2 || 'Unknown File',
        relativePath: diff.relativePath || '',
        status,
        originalPath: diff.path1 && diff.name1 ? path.join(diff.path1, diff.name1) : null,
        modifiedPath: diff.path2 && diff.name2 ? path.join(diff.path2, diff.name2) : null,
        isDirectory: diff.type1 === 'directory' || diff.type2 === 'directory'
      }
    })

    return mappedFiles
  } catch (error: any) {
    console.error('Error occured while comparing directories:', error)
    throw new Error(
      'Error occured while comparing directories. Contact support if the issue persists.'
    )
  }
}
