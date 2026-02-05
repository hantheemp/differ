export type CodePaneLineVariant = 'default' | 'added' | 'removed' | 'placeholder'

export interface CodePaneLine {
  lineNumber: number | null
  content: string
  variant: CodePaneLineVariant
}

export interface CodePaneProps {
  className?: string
  title?: string
  language?: string
  lines: CodePaneLine[]
}
