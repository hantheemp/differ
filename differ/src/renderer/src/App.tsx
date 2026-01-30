import Directory from './organisms/Directory/Directory'

function App(): React.JSX.Element {
  return (
    <div className="bg-primary">
      <div className="min-h-screen bg-base-100 text-base-content p-6 space-y-4">
        <Directory></Directory>
      </div>
    </div>
  )
}

export default App
