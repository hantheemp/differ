import type { SplitDiff, SplitDiffLine, UnifiedDiff } from '@renderer/types/diff'

function toLeftLine(line: UnifiedDiff['lines'][number]): SplitDiffLine {
  if (line.kind === 'added') {
    return {
      kind: 'empty',
      content: '',
      lineNumber: null
    }
  }

  return {
    kind: line.kind,
    content: line.content,
    lineNumber: line.oldLineNumber
  }
}

function toRightLine(line: UnifiedDiff['lines'][number]): SplitDiffLine {
  if (line.kind === 'removed') {
    return {
      kind: 'empty',
      content: '',
      lineNumber: null
    }
  }

  return {
    kind: line.kind,
    content: line.content,
    lineNumber: line.newLineNumber
  }
}

export function mapUnifiedDiffToSplit(unifiedDiff: UnifiedDiff): SplitDiff {
  return unifiedDiff.lines.reduce<SplitDiff>(
    (split, line) => {
      split.left.push(toLeftLine(line))
      split.right.push(toRightLine(line))
      return split
    },
    {
      left: [],
      right: []
    }
  )
}
