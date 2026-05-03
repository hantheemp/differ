interface ButtonProps {
  text?: string
  logo?: React.ReactNode
  onClick: () => void
  className?: string
  variant?: 'default' | 'primary'
  disabled?: boolean
}