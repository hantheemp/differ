// atoms/Icon/Icon.tsx
interface IconProps {
  children: React.ReactNode
  width?: number
  height?: number
  className?: string
}

export default function Icon({ children, width = 24, height = 24, className = '' }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={`fill-current ${className}`}
    >
      {children}
    </svg>
  )
}
