export type {
  UnifiedDiff,
  UnifiedDiffLine,
  UnifiedDiffLineKind
} from '../../../shared/diff/computeUnifiedLineDiff'

export type SplitDiffLineKind = 'context' | 'added' | 'removed' | 'empty'

export interface SplitDiffLine {
  kind: SplitDiffLineKind
  content: string
  lineNumber: number | null
}

export interface SplitDiff {
  left: SplitDiffLine[]
  right: SplitDiffLine[]
}
