import DiffView from './components/DiffView/DiffView'
import Directory from './components/Directory/Directory'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import FileTree from './components/FileTree/FileTree'

export default function App(): React.JSX.Element {

  return (
    <div className="bg-background-dark min-h-screen flex flex-col">
      <Navbar />
      <Directory />
      <div className="flex flex-row gap-4 p-4 flex-1 overflow-hidden">
        <FileTree added={3} removed={1} modified={2} />
        <DiffView
          origin="console.log('Hello, World!');"
          modified="console.log('Hello, Universe!');"
          language="typescript"
          theme="vs-dark"
        />
      </div>
      <Footer status="ready" durationMs={245} />
    </div>
  )
}
