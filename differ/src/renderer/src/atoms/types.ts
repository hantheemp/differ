interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

interface MonacoDiffProps {
  original: string
  modified: string
  language?: string
}

export type { ButtonProps, TextInputProps, MonacoDiffProps }
