import Button from '@renderer/atoms/Button/Button'
import TextInput from '@renderer/atoms/TextInput/TextInput'

export default function DirectoryInput({ children }: ButtonProps): React.JSX.Element {
  return (
    <div>
      <TextInput />
      <Button>{children}</Button>
    </div>
  )
}
