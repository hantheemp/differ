import type { ReactNode } from 'react'

export interface HorizontalSplitProps {
  left: ReactNode
  right: ReactNode
  defaultSize?: number | 'center'
  min?: number
  max?: number
  snapPoints?: number[]
  snapThreshold?: number
  className?: string
}
