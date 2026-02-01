import { ReactNode } from 'react'

export interface VerticalSplitProps {
  top: ReactNode
  bottom: ReactNode
  defaultSize?: number
  min?: number
  max?: number
  snapPoints?: number[]
  snapThreshold?: number
  className?: string
}
