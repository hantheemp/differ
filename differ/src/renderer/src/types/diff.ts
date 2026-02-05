export type UnifiedDiffLineKind = 'context' | 'added' | 'removed'

export interface UnifiedDiffLine {
  kind: UnifiedDiffLineKind
  content: string
  oldLineNumber: number | null
  newLineNumber: number | null
}

export interface UnifiedDiff {
  lines: UnifiedDiffLine[]
}

export type SplitDiffLineKind = UnifiedDiffLineKind | 'empty'

export interface SplitDiffLine {
  kind: SplitDiffLineKind
  content: string
  lineNumber: number | null
}

export interface SplitDiff {
  left: SplitDiffLine[]
  right: SplitDiffLine[]
}
