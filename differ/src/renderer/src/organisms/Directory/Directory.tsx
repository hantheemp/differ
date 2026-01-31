import { useStore } from '@renderer/store/useStore'
import Label from '@renderer/atoms/Label/Label'
import DirectoryInput from '@renderer/molecules/DirectoryInput/DirectoryInput'
import Button from '@renderer/atoms/Button/Button'

export default function Directory() {
  const { baselineDirectory, targetDirectory, setBaselineDirectory, setTargetDirectory } =
    useStore()

  return (
    <div className="space-y-4 p-4 rounded shadow-xl">
      <Label className="text-lg font-bold normal-case tracking-normal block mb-4">
        Pick project directories
      </Label>
      <DirectoryInput
        label="Baseline"
        value={baselineDirectory}
        onChange={setBaselineDirectory}
        onSelect={() => console.log('Select Baseline directory')}
      />
      <DirectoryInput
        label="Target"
        value={targetDirectory}
        onChange={setTargetDirectory}
        onSelect={() => console.log('Select Baseline directory')}
      />
      <Button className="btn btn-primary w-full">Compare</Button>
    </div>
  )
}
