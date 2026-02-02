import Logo from '@renderer/atoms/Logo/Logo'

export default function Copyright({ year = new Date().getFullYear() }: CopyrightProps) {
  return (
    <aside className="grid-flow-col items-center">
      <Logo size={36} className="bg-blue-50 rounded-4xl" />
      <p>Murat Kagan Temel © {year} - All right reserved</p>
    </aside>
  )
}
