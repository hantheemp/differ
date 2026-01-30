import Logo from '@renderer/atoms/Logo/Logo'

interface CopyrightProps {
  year?: number
}

export default function Copyright({ year = new Date().getFullYear() }: CopyrightProps) {
  return (
    <aside className="grid-flow-col items-center">
      <Logo size={36} />
      <p>Murat Kagan Temel © {year} - All right reserved</p>
    </aside>
  )
}