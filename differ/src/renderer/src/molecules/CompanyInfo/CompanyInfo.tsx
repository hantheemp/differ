import Logo from '@renderer/atoms/Logo/Logo'

export default function CompanyInfo({ name, tagline, year = new Date().getFullYear() }: CompanyInfoProps) {
  return (
    <aside className="flex flex-col items-center gap-2">
      <Logo />
      <p className="font-bold">
        {name}
        <br />
        {tagline}
      </p>
      <p>Copyright © {year} - All right reserved</p>
    </aside>
  )
}