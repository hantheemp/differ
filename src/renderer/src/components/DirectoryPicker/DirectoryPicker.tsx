import { FolderOpen, Search } from 'lucide-react'
import Button from '../Button/Button'

export default function DirectoryPicker({
  placeholder,
  value,
  onBrowse
}: DirectoryPickerProps): React.JSX.Element {
  return (
    <div className="flex-1 w-full flex items-center gap-2">
      <FolderOpen className="text-slate-500 shrink-0" size={20} />
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex gap-2">
          <input
            type="text"
            readOnly
            disabled
            placeholder={placeholder}
            value={value ?? ''}
            className="flex-1 min-w-0 rounded-lg text-slate-200 placeholder:text-slate-600 border border-border-dark bg-surface-dark h-9 px-3 text-sm font-mono outline-none"
          />
          <Button logo={<Search size={20}/>} onClick={onBrowse} />
        </div>
      </div>
    </div>
  )
}
