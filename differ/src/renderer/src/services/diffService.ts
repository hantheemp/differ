import type { UnifiedDiff, UnifiedDiffLine } from '@renderer/types/diff'

function splitLines(content: string): string[] {
  return content.split(/\r?\n/)
}

function buildLcsTable(leftLines: string[], rightLines: string[]): number[][] {
  const table = Array.from({ length: leftLines.length + 1 }, () =>
    Array.from({ length: rightLines.length + 1 }, () => 0)
  )

  for (let leftIndex = leftLines.length - 1; leftIndex >= 0; leftIndex -= 1) {
    for (let rightIndex = rightLines.length - 1; rightIndex >= 0; rightIndex -= 1) {
      if (leftLines[leftIndex] === rightLines[rightIndex]) {
        table[leftIndex][rightIndex] = table[leftIndex + 1][rightIndex + 1] + 1
      } else {
        table[leftIndex][rightIndex] = Math.max(
          table[leftIndex + 1][rightIndex],
          table[leftIndex][rightIndex + 1]
        )
      }
    }
  }

  return table
}

export function computeUnifiedLineDiff(leftContent: string, rightContent: string): UnifiedDiff {
  const leftLines = splitLines(leftContent)
  const rightLines = splitLines(rightContent)
  const lcsTable = buildLcsTable(leftLines, rightLines)

  const lines: UnifiedDiffLine[] = []

  let leftIndex = 0
  let rightIndex = 0
  let leftLineNumber = 1
  let rightLineNumber = 1

  while (leftIndex < leftLines.length && rightIndex < rightLines.length) {
    if (leftLines[leftIndex] === rightLines[rightIndex]) {
      lines.push({
        kind: 'context',
        content: leftLines[leftIndex],
        oldLineNumber: leftLineNumber,
        newLineNumber: rightLineNumber
      })
      leftIndex += 1
      rightIndex += 1
      leftLineNumber += 1
      rightLineNumber += 1
      continue
    }

    if (lcsTable[leftIndex + 1][rightIndex] >= lcsTable[leftIndex][rightIndex + 1]) {
      lines.push({
        kind: 'removed',
        content: leftLines[leftIndex],
        oldLineNumber: leftLineNumber,
        newLineNumber: null
      })
      leftIndex += 1
      leftLineNumber += 1
      continue
    }

    lines.push({
      kind: 'added',
      content: rightLines[rightIndex],
      oldLineNumber: null,
      newLineNumber: rightLineNumber
    })
    rightIndex += 1
    rightLineNumber += 1
  }

  while (leftIndex < leftLines.length) {
    lines.push({
      kind: 'removed',
      content: leftLines[leftIndex],
      oldLineNumber: leftLineNumber,
      newLineNumber: null
    })
    leftIndex += 1
    leftLineNumber += 1
  }

  while (rightIndex < rightLines.length) {
    lines.push({
      kind: 'added',
      content: rightLines[rightIndex],
      oldLineNumber: null,
      newLineNumber: rightLineNumber
    })
    rightIndex += 1
    rightLineNumber += 1
  }

  return { lines }
}
