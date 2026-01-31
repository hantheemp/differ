// molecules/SocialLinks/SocialLinks.tsx
import Icon from '@renderer/atoms/Icon/Icon'

interface SocialLink {
  platform: 'Linkedin' | 'Github' | 'Mail'
  href: string
}

interface SocialLinksProps {
  links?: SocialLink[]
}

export default function SocialLinks({
  links = [
    { platform: 'Linkedin', href: 'https://www.linkedin.com/in/muratkagan/' },
    { platform: 'Github', href: 'https://github.com/hantheemp' },
    { platform: 'Mail', href: 'mailto:temelmuratkagan@gmail.com' }
  ]
}: SocialLinksProps) {
  return (
    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      {links.map(({ platform, href }) => (
        <a
          key={platform}
          href={href}
          aria-label={platform}
          className="hover:opacity-80 transition-opacity"
          rel="noopener noreferrer"
        >
          <Icon name={platform} />
        </a>
      ))}
    </nav>
  )
}
