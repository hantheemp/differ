import { useEffect, useRef, useState } from 'react'
import ResizableDivider from '@renderer/atoms/ResizableDivider/ResizableDivider'
import type { HorizontalSplitProps } from './types'

export default function HorizontalSplit({
  left,
  right,
  defaultSize = 320,
  min = 200,
  max = 1200,
  snapPoints = [],
  snapThreshold = 12,
  className = ''
}: HorizontalSplitProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [leftWidth, setLeftWidth] = useState<number>(
    typeof defaultSize === 'number' ? defaultSize : 0
  )
  const resetSizeRef = useRef<number>(leftWidth)

  useEffect(() => {
    if (defaultSize !== 'center' || !containerRef.current) return

    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width
      const center = Math.round(width / 2)

      resetSizeRef.current = center
      setLeftWidth(center)
    })

    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [defaultSize])

  const applySnap = (value: number) => {
    for (const snap of snapPoints) {
      if (Math.abs(value - snap) <= snapThreshold) {
        return snap
      }
    }
    return value
  }

  const handleDrag = (delta: number) => {
    setLeftWidth((prev) => {
      let next = prev + delta
      next = Math.max(min, Math.min(max, next))
      return applySnap(next)
    })
  }

  const handleReset = () => {
    setLeftWidth(resetSizeRef.current)
  }

  return (
    <div ref={containerRef} className={`flex h-full ${className}`}>
      <div style={{ width: leftWidth }} className="overflow-auto">
        {left}
      </div>

      <ResizableDivider axis="x" onDrag={handleDrag} onDoubleClick={handleReset} />

      <div className="flex-1 overflow-auto">{right}</div>
    </div>
  )
}
