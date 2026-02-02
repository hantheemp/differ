import * as LucideIcons from 'lucide-react'
import { LucideIcon } from 'lucide-react'
import type { IconProps } from './types'

export default function Icon({ name, size = 24, className = '' }: IconProps) {
  const IconComponent = LucideIcons[name] as LucideIcon
  return <IconComponent size={size} className={className} />
}
