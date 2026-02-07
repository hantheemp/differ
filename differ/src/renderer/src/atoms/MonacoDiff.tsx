import { DiffEditor } from '@monaco-editor/react'
import { MonacoDiffProps } from './types'

export default function MonacoDiff({
  original,
  modified,
  language = 'typescript'
}: MonacoDiffProps) {
  return (
    <DiffEditor
      original={original}
      modified={modified}
      language={language}
      theme="vs-dark"
      height="90vh"
      options={{
        readOnly: true,
        renderSideBySide: true,
        automaticLayout: true,
        minimap: { enabled: false },
        scrollBeyondLastLine: false
      }}
    />
  )
}
