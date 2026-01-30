interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export default function TextInput({ className = '', ...props }: TextInputProps) {
  return (
    <input
      type="text"
      className={`
        input input-bordered
        bg-base-200 text-base-content
        font-mono text-sm
        focus:outline-none focus:ring-1 focus:ring-primary
        transition-colors
        ${className}
      `}
      {...props}
    />
  )
}
