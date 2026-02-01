import Button from '@renderer/atoms/Button/Button'
import Label from '@renderer/atoms/Label/Label'
import TextInput from '@renderer/atoms/TextInput/TextInput'
import { DirectoryInputProps } from './type'

export default function DirectoryInput({
  label,
  value = '',
  onChange,
  onSelect,
  buttonText = 'Select'
}: DirectoryInputProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      <Label className="w-20 text-xs font-normal normal-case">{label}</Label>
      <TextInput
        className="flex-1 mr-6"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        readOnly={!onChange}
      />
      <Button className="btn btn-secondary" onClick={onSelect}>
        {buttonText}
      </Button>
    </div>
  )
}
