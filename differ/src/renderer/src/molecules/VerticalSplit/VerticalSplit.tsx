import { useState } from 'react'
import ResizableDivider from '@renderer/atoms/ResizableDivider/ResizableDivider'
import { VerticalSplitProps } from './types'

export default function VerticalSplit({
  top,
  bottom,
  defaultSize = 240,
  min = 120,
  max = 800,
  snapPoints = [],
  snapThreshold = 12,
  className = ''
}: VerticalSplitProps) {
  const [topHeight, setTopHeight] = useState(defaultSize)

  const applySnap = (value: number) => {
    for (const snap of snapPoints) {
      if (Math.abs(value - snap) <= snapThreshold) {
        return snap
      }
    }
    return value
  }

  const handleDrag = (delta: number) => {
    setTopHeight((prev) => {
      let next = prev + delta
      next = Math.max(min, Math.min(max, next))
      return applySnap(next)
    })
  }

  const handleReset = () => {
    setTopHeight(defaultSize)
  }

  return (
    <div className={`flex flex-col h-full ${className}`}>
      <div style={{ height: topHeight }} className="overflow-auto">
        {top}
      </div>

      <ResizableDivider
        onDrag={handleDrag}
        onDoubleClick={handleReset}
        className="h-1 w-full cursor-row-resize"
      />

      <div className="flex-1 overflow-auto">{bottom}</div>
    </div>
  )
}
