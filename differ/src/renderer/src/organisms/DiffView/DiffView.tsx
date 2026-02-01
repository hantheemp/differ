import CodePane from '@renderer/atoms/CodePane/CodePane'
import HorizontalSplit from '@renderer/molecules/HorizontalSplit/HorizontalSplit'

export default function DiffView() {
  return (
    <HorizontalSplit
      defaultSize="center"
      min={300}
      max={1000}
      left={<CodePane title="Baseline" />}
      right={<CodePane title="Target" />}
    />
  )
}
