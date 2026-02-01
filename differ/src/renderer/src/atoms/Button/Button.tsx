import type { ButtonProps } from './type'

export default function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}
