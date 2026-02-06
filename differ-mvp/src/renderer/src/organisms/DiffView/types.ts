import type { CodePaneLine } from '@renderer/atoms/CodePane/types'

export interface DiffPaneData {
  title: string
  lines: CodePaneLine[]
}
