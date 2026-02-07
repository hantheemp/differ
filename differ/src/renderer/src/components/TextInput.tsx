import { TextInputProps } from './types'

export default function TextInput({ className = '', ...props }: TextInputProps) {
  return (
    <input
      type="text"
      className={`
        input input-bordered
        bg-base-200 text-base-content
        text-sm
        ${className}
      `}
      {...props}
    />
  )
}
