import MonacoDiff from './atoms/MonacoDiff'
import { MODIFIED, ORIGINAL } from './testData'

function App(): React.JSX.Element {
  return (
    <div className="bg-base-300 h-screen w-screen p-4">
      <MonacoDiff original={ORIGINAL} modified={MODIFIED} language="sql" />
    </div>
  )
}

export default App
