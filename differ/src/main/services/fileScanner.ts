import * as path from 'path'
import { FileResult, ScanResult } from '../ipc/types'
import { getAllFiles } from './directoryScanner'
import { getFileHash, readFile } from './fileSystem'
import { computeUnifiedLineDiff } from '../../shared/diff/computeUnifiedLineDiff'

export async function scanDirectories(
  baselinePath: string,
  targetPath: string
): Promise<ScanResult> {
  console.log('Scanning directories...')

  const [baselineFiles, targetFiles] = await Promise.all([
    getAllFiles(baselinePath),
    getAllFiles(targetPath)
  ])

  console.log(`Found ${baselineFiles.length} baseline files, ${targetFiles.length} target files`)

  const baselineSet = new Set(baselineFiles.map((f) => path.relative(baselinePath, f)))
  const targetSet = new Set(targetFiles.map((f) => path.relative(targetPath, f)))

  const filePromises: Promise<FileResult>[] = []
  const stats = { added: 0, modified: 0, deleted: 0, unchanged: 0 }

  for (const baselineFile of baselineFiles) {
    const relativePath = path.relative(baselinePath, baselineFile)
    const targetFile = path.join(targetPath, relativePath)

    filePromises.push(
      processBaselineFile(
        baselineFile,
        targetFile,
        relativePath,
        targetSet.has(relativePath),
        stats
      )
    )
  }

  for (const targetFile of targetFiles) {
    const relativePath = path.relative(targetPath, targetFile)

    if (!baselineSet.has(relativePath)) {
      stats.added++
      console.log(`Added: ${relativePath}`)
      filePromises.push(
        Promise.resolve({
          path: relativePath,
          status: 'added',
          baseline: null,
          target: targetFile
        })
      )
    }
  }

  const files = await Promise.all(filePromises)

  console.log('Scan complete:', stats)
  console.log(`Total files: ${files.length}`)

  return { files, stats }
}

async function processBaselineFile(
  baselineFile: string,
  targetFile: string,
  relativePath: string,
  existsInTarget: boolean,
  stats: { added: number; modified: number; deleted: number; unchanged: number }
): Promise<FileResult> {
  if (!existsInTarget) {
    stats.deleted++
    console.log(`Deleted: ${relativePath}`)
    return {
      path: relativePath,
      status: 'deleted',
      baseline: baselineFile,
      target: targetFile
    }
  }

  const [baselineHash, targetHash] = await Promise.all([
    getFileHash(baselineFile),
    getFileHash(targetFile)
  ])

  if (baselineHash !== targetHash) {
    const [baselineContent, targetContent] = await Promise.all([
      readFile(baselineFile).then((buffer) => buffer.toString('utf-8')),
      readFile(targetFile).then((buffer) => buffer.toString('utf-8'))
    ])

    const unifiedDiff = computeUnifiedLineDiff(baselineContent, targetContent)
    const hasSemanticChanges = unifiedDiff.lines.some(
      (line) => line.kind === 'added' || line.kind === 'removed'
    )

    if (hasSemanticChanges) {
      stats.modified++
      console.log(`Modified: ${relativePath}`)
      return {
        path: relativePath,
        status: 'modified',
        baseline: baselineFile,
        target: targetFile
      }
    }
  }

  stats.unchanged++
  console.log(`Unchanged: ${relativePath}`)
  return {
    path: relativePath,
    status: 'unchanged',
    baseline: baselineFile,
    target: targetFile
  }
}
