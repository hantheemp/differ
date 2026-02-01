import type { LabelProps } from './type'

export default function Label({ children, className = '' }: LabelProps) {
  return (
    <label className={`text-slate-400 uppercase tracking-wider ${className}`}>{children}</label>
  )
}
