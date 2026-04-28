import { Play } from 'lucide-react'
import Button from '../Button/Button'
import DirectoryPicker from '../DirectoryPicker/DirectoryPicker'

export default function Directory(): React.JSX.Element {
  return (
    <div className="flex items-end gap-4 px-4 py-3 border-b border-border-dark bg-background-dark shrink-0">
      <DirectoryPicker
        placeholder="/path/to/baseline/project"
        value=""
        onBrowse={() => console.log('browse clicked')}
      />
      <DirectoryPicker
        placeholder="/path/to/target/project"
        value=""
        onBrowse={() => console.log('browse clicked')}
      />
      <Button
        text="Run Diff"
        logo={<Play size={16} />}
        onClick={() => console.log('Run Diff Clicked')}
        variant="primary"
        className="shrink-0"
      />
    </div>
  )
}