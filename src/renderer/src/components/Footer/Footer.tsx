import React from 'react'
import useCompare from '@renderer/hooks/useCompare'
import { useCompareStore } from '@renderer/store/CompareStore/useCompareStore'
import { statusConfig } from './config'
import { FooterStatus } from './type'

export default function Footer(): React.JSX.Element {
  const { loading, error } = useCompare()
  const durationMs = useCompareStore((state) => state.compareTime)

  let status: FooterStatus = 'initial'

  if (loading) {
    status = 'processing'
  } else if (error) {
    status = 'failed'
  } else if (durationMs) {
    status = 'ready'
  }

  const { label, color, glow } = statusConfig[status]

  return (
    <footer className="h-8 grid grid-cols-3 items-center px-4 bg-surface-dark border-t border-border-dark shrink-0">
      <div className="flex items-center gap-4 text-xs">
        <span className="text-slate-300 flex items-center gap-1.5">
          <span className={`block size-2 rounded-full ${color} ${glow}`} />
          {label}
        </span>

        {status === 'ready' && durationMs && (
          <>
            <span className="text-slate-500">|</span>
            <span className="text-slate-500">Diff complete in {durationMs}ms</span>
          </>
        )}
      </div>
      <span className="text-xs text-slate-500 text-center">
        Developed by Murat Kagan in 2026. All rights reserved.
      </span>
      <div />
    </footer>
  )
}
