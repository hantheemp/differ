import Button from './components/Button/Button'
import FileInput from './components/FileInput/FileInput'
import TextInput from './components/TextInput/TextInput'

function App(): React.JSX.Element {
  return (
    <div className="bg-primary">
      <div className="min-h-screen bg-base-100 text-base-content p-6 space-y-4">
        <div className="bg-base-200 p-4 rounded">bg-base-200 (should be dark gray)</div>

        <div className="bg-base-300 p-4 rounded">bg-base-300 (should be darker)</div>

        <Button>Click me</Button>
        <FileInput />
        <TextInput />
      </div>
    </div>
  )
}

export default App
