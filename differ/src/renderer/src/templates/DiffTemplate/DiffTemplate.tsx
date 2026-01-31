import FileTree from '@renderer/organisms/FileTree/FileTree'
import CodePane from '@renderer/atoms/CodePane/CodePane'

export default function DiffTemplate() {
  return (
    <div className="flex h-screen w-full">
      <div className="w-80 shrink-0">
        <FileTree />
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="flex flex-1">
        <div className="flex-1">
          <CodePane title="Baseline" />
        </div>
        <div className="flex-1">
          <CodePane title="Target" />
        </div>
      </div>
    </div>
  )
}
