import FileTree from '@renderer/organisms/FileTree/FileTree'
import DiffView from '@renderer/organisms/DiffView/DiffView'
import HorizontalSplit from '@renderer/molecules/HorizontalSplit/HorizontalSplit'

export default function DiffTemplate() {
  return (
    <div className="h-screen">
      <HorizontalSplit
        defaultSize={320}
        min={200}
        max={600}
        left={<FileTree />}
        right={<DiffView />}
      />
    </div>
  )
}
