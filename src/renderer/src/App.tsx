import DiffView from './components/DiffView/DiffView'
import Directory from './components/Directory/Directory'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import FileTree from './components/FileTree/FileTree'

export default function App(): React.JSX.Element {
  return (
    <div className="bg-background-dark h-screen w-screen flex flex-col overflow-hidden">
      <Navbar />
      <Directory />
      
      <div className="flex flex-row gap-4 p-4 flex-1 overflow-hidden min-h-0">
        <FileTree/>
        
        <div className="flex-1 relative min-w-0 border border-border-dark rounded-lg overflow-hidden">
          <DiffView
            origin="console.log('Hello, World!');"
            modified="console.log('Hello, Universe!');"
            language="typescript"
            theme="vs-dark"
          />
        </div>
      </div>
      
      <Footer status="ready" durationMs={245} />
    </div>
  )
}