import { ButtonProps } from './types'

export default function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}
