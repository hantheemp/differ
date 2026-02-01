interface SocialLink {
  platform: 'Linkedin' | 'Github' | 'Mail'
  href: string
}

interface SocialLinksProps {
  links?: SocialLink[]
}