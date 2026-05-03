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
        <X size={20} />
      </button>
      <div className="p-4 border-b border-border-dark bg-background-dark/50">
        <h2 className="text-sm font-bold text-slate-200">Settings</h2>
      </div>

      <div className="p-4 flex flex-col gap-4 text-slate-300">
        <div className="flex flex-row items-center justify-between mb-2">
          <label className="block text-sm font-bold text-slate-400">Theme</label>
          <select className="bg-surface-dark border border-border-dark rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
        <div className="flex flex-row items-center justify-between mb-2">
          <label className="block text-sm font-bold text-slate-400">Invert Diff View</label>
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        </div>
        <div className="flex flex-row items-center justify-between mb-2">
          <label className="block text-sm font-bold text-slate-400">Enable Ignore</label>
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        </div>
      </div>
    </div>
  )
}
