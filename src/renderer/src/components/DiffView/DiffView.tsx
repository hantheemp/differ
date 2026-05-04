import React, { useEffect, useRef } from 'react'
import { DiffEditor } from '@monaco-editor/react'

export default function DiffView({
  origin,
  modified,
  language,
  theme
}: DiffViewProps): React.JSX.Element {

  const diffEditorRef = useRef<any>(null)

  const handleEditorMount = (editor: any) => {
    diffEditorRef.current = editor
  }

  useEffect(() => {
    if (diffEditorRef.current) {
      const originalEditor = diffEditorRef.current.getOriginalEditor()
      const modifiedEditor = diffEditorRef.current.getModifiedEditor()

      originalEditor.setScrollTop(0)
      modifiedEditor.setScrollTop(0)
      
      originalEditor.setPosition({ lineNumber: 1, column: 1 })
      modifiedEditor.setPosition({ lineNumber: 1, column: 1 })
    }
  }, [origin, modified])

  return (
    <DiffEditor
      height="100%"
      original={origin}
      modified={modified}
      language={language}
      theme={theme}
      onMount={handleEditorMount}
      options={{
        automaticLayout: true,
        minimap: { enabled: true, showSlider: 'always' },
        ignoreTrimWhitespace: true,
        originalEditable: false,
        readOnly: true
      }}
    />
  )
}
