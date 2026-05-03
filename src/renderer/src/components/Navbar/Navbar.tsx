import { useSettingsStore } from '@renderer/store/SettingsStore/useSettingsStore'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import { SettingsIcon } from 'lucide-react'
import Settings from '../Settings/Settings'

export default function Navbar(): React.JSX.Element {
  const toggleSettings = useSettingsStore((state) => state.toggleSettings)

  return (
    <header className="flex justify-between items-center px-4 py-3 bg-surface-dark border-b border-border-dark shrink-0">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Logo />
        </div>
        <span className="text-white text-xl font-bold tracking-tight">Differ</span>
      </div>
      <div className="relative">
        <Button logo={<SettingsIcon size={20} />} onClick={toggleSettings} />
        <Settings />
      </div>
    </header>
  )
}
