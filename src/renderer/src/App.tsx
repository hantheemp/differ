import DiffView from './components/DiffView/DiffView'
import Directory from './components/Directory/Directory'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import FileTree from './components/FileTree/FileTree'
import { useEditorStore } from './store/EditorStore/useEditorStore'

export default function App(): React.JSX.Element {
  const { originalContent, modifiedContent, language, isLoadingContent } = useEditorStore()

  return (
    <div className="bg-background-dark h-screen w-screen flex flex-col overflow-hidden">
      <Navbar />
      <Directory />

      <div className="flex flex-row gap-4 p-4 flex-1 overflow-hidden min-h-0">
        <FileTree />

        <div className="flex-1 relative min-w-0 border border-border-dark rounded-lg overflow-hidden bg-[#1e1e1e]">
          {!isLoadingContent && !originalContent && !modifiedContent ? (
            <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm">
              Select a file from the tree to view differences.
            </div>
          ) : (
            <DiffView
              origin={originalContent}
              modified={modifiedContent}
              language={language}
              theme="vs-dark"
            />
          )}
        </div>
      </div>

      <Footer status="ready" />
    </div>
  )
}
