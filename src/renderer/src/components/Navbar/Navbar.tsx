import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import { SettingsIcon } from 'lucide-react'

export default function Navbar(): React.JSX.Element {
  return (
    <header className="flex justify-between items-center px-4 py-3 bg-surface-dark border-b border-border-dark shrink-0">
      <div className="flex items-center gap-5">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Logo />
        </div>
        <span className="text-white text-xl font-bold tracking-tight">Differ</span>
      </div>
        <Button
          text="Settings"
          logo={<SettingsIcon size={20}/>}
          onClick={() => console.log('Settings Clicked')}
        />
    </header>
  )
}
