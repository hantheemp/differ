import { useSettingsStore } from '@renderer/store/SettingsStore/useSettingsStore'
import { X } from 'lucide-react'

export default function Settings(): React.JSX.Element | null {
  const { isOpen, closeSettings } = useSettingsStore()

  if (!isOpen) return null

  return (
    <div className="absolute right-0 top-full mt-2 w-72 bg-surface-dark border border-border-dark rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden">
      <button
        className="absolute top-4 right-4 text-slate-400 hover:text-slate-200"
        onClick={closeSettings}
      >
        <X size={16} />
      </button>
      <div className="p-4 border-b border-border-dark bg-background-dark/50">
        <h2 className="text-sm font-bold text-slate-200">Settings</h2>
      </div>

      <div className="p-4 flex flex-col gap-4 text-slate-300">
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Do Eiusmod Tempor Incididunt Ut
        Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco
        Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In
        Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur.
      </div>
    </div>
  )
}
