interface LabelProps {
  children: React.ReactNode
  className?: string
}

export default function Label({ children, className = '' }: LabelProps) {
  return (
    <label className={`text-slate-400 uppercase tracking-wider ${className}`}>{children}</label>
  )
}
