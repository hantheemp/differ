import Icon from '@renderer/atoms/Icon/Icon'

interface LogoProps {
  size?: number
  className?: string
}

export default function Logo({ size = 36, className = '' }: LogoProps) {
  return <Icon name="Layers" size={size} className={className} />
}
