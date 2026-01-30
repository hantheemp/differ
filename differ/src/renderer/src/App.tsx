import Button from './atoms/Button/Button'
import FileInput from './atoms/FileInput/FileInput'
import TextInput from './atoms/TextInput/TextInput'
import DirectoryInput from './molecules/DirectoryInput/DirectoryInput'

function App(): React.JSX.Element {
  return (
    <div className="bg-primary">
      <div className="min-h-screen bg-base-100 text-base-content p-6 space-y-4">
        <div className="bg-base-200 p-4 rounded">bg-base-200 (should be dark gray)</div>

        <div className="bg-base-300 p-4 rounded">bg-base-300 (should be darker)</div>

        <Button>Click me</Button>
        <FileInput />
        <TextInput />
        <DirectoryInput>Choose</DirectoryInput>
      </div>
    </div>
  )
}

export default App
