export default function Button({
  text,
  logo,
  onClick,
  className = '',
  variant = 'default',
  disabled = false
}: ButtonProps): React.JSX.Element {
  const base =
    variant === 'primary'
      ? 'h-9 px-6 bg-primary hover:bg-blue-600 text-white text-sm font-bold rounded-lg shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 transition-all'
      : 'text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center justify-center'

  return (
    <button disabled={disabled} onClick={onClick} className={`${base} ${className}`}>
      {logo && <span className="flex items-center justify-center">{logo}</span>}
    </button>
  )
}
