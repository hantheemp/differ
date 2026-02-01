import { useEffect, useRef, useState } from 'react'

interface ResizableDividerProps {
  onDrag: (delta: number) => void
  onDragEnd?: () => void
  onDoubleClick?: () => void
  axis?: 'x' | 'y'
  className?: string
}

export default function ResizableDivider({
  onDrag,
  onDragEnd,
  onDoubleClick,
  axis = 'x',
  className = ''
}: ResizableDividerProps) {
  const [dragging, setDragging] = useState(false)
  const lastPos = useRef<number | null>(null)

  useEffect(() => {
    if (!dragging) return

    const handleMove = (e: MouseEvent) => {
      const currentPos = axis === 'x' ? e.clientX : e.clientY

      if (lastPos.current === null) {
        lastPos.current = currentPos
        return
      }

      const delta = currentPos - lastPos.current
      lastPos.current = currentPos
      onDrag(delta)
    }

    const handleUp = () => {
      setDragging(false)
      lastPos.current = null
      onDragEnd?.()
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseup', handleUp)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseup', handleUp)
    }
  }, [dragging, axis, onDrag, onDragEnd])

  return (
    <>
      <div
        onMouseDown={() => setDragging(true)}
        onDoubleClick={onDoubleClick}
        className={`
          bg-base-300 hover:bg-primary
          ${axis === 'x' ? 'w-1 cursor-col-resize' : 'h-1 cursor-row-resize'}
          ${className}
        `}
      />

      {dragging && (
        <style>{`
          * {
            cursor: ${axis === 'x' ? 'col-resize' : 'row-resize'} !important;
            user-select: none !important;
          }
        `}</style>
      )}
    </>
  )
}
