import { useEffect, useState } from 'react'
import { DiffEditor, Editor } from '@monaco-editor/react'
import { DiffTreeNode } from 'src/shared/fileStatus'

type Props = {
  node: DiffTreeNode | null
}

export default function MonacoViewer({ node }: Props) {
  const [base, setBase] = useState('')
  const [target, setTarget] = useState('')

  useEffect(() => {
    setBase('')
    setTarget('')

    if (!node) return

    if (node.status === 'modified') {
      Promise.all([
        window.api.readFile(node.path, 'base'),
        window.api.readFile(node.path, 'target')
      ]).then(([b, t]) => {
        setBase(b)
        setTarget(t)
      })
    }

    if (node.status === 'added') {
      window.api.readFile(node.path, 'target').then(setTarget)
    }

    if (node.status === 'removed') {
      window.api.readFile(node.path, 'base').then(setBase)
    }
  }, [node])

  if (!node) {
    return (
      <div className="h-full flex items-center justify-center text-base-content/50">
        Select a file
      </div>
    )
  }

  if (node.status === 'modified') {
    return (
      <DiffEditor
        height="100%"
        original={base}
        modified={target}
        theme="vs-dark"
        options={{
          readOnly: false,
          renderSideBySide: true,
          ignoreTrimWhitespace: false,
          renderIndicators: true
        }}
      />
    )
  }

  return (
    <Editor
      height="100%"
      value={node.status === 'added' ? target : base}
      theme="vs-dark"
      options={{ readOnly: true }}
    />
  )
}
