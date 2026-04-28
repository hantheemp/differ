import React from 'react'
import { DiffEditor } from '@monaco-editor/react'

export default function DiffView({
  origin,
  modified,
  language,
  theme
}: DiffViewProps): React.JSX.Element {
  return (
    <DiffEditor
      height="90vh"
      original={origin}
      modified={modified}
      language={language}
      theme={theme}
      options={{
        minimap: { enabled: true, showSlider: 'always' }
      }}
    />
  )
}
