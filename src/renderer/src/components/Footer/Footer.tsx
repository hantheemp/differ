import { useCompareStore } from "@renderer/store/CompareStore/useCompareStore";

const statusConfig: Record<FooterStatus, { label: string; color: string; glow: string }> = {
  initial: {
    label: '',
    color: 'bg-gray-500',
    glow: 'shadow-[0_0_8px_rgba(107,114,128,0.6)]'
  },
  ready: { label: 'Ready', color: 'bg-green-500', glow: 'shadow-[0_0_8px_rgba(34,197,94,0.6)]' },
  processing: {
    label: 'Processing',
    color: 'bg-yellow-400',
    glow: 'shadow-[0_0_8px_rgba(250,204,21,0.6)]'
  },
  failed: { label: 'Failed', color: 'bg-red-500', glow: 'shadow-[0_0_8px_rgba(239,68,68,0.6)]' }
}

export default function Footer({ status }: FooterProps): React.JSX.Element {
  const { label, color, glow } = statusConfig[status]

  const durationMs = useCompareStore((state) => state.compareTime)

  return (
    <footer className="h-8 grid grid-cols-3 items-center px-4 bg-surface-dark border-t border-border-dark shrink-0">
      <div className="flex items-center gap-4 text-xs">
        <span className="text-slate-300 flex items-center gap-1.5">
          <span className={`block size-2 rounded-full ${color} ${glow}`} />
          {label}
        </span>
        {status !== 'initial' && status !== 'processing' && durationMs !== undefined && (
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
