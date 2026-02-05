import Prism from 'prismjs'
import 'prismjs/components/prism-csharp'
import 'prismjs/themes/prism-tomorrow.css'

import Label from '../Label/Label'
import type { CodePaneLine, CodePaneLineVariant, CodePaneProps } from './types'

const VARIANT_CLASS: Record<CodePaneLineVariant, string> = {
  default: 'bg-transparent',
  added: 'bg-success/15',
  removed: 'bg-error/15',
  placeholder: 'bg-base-300/30'
}

function highlightLine(content: string, language: string): string {
  const grammar = Prism.languages[language]
  if (!grammar) {
    return Prism.util.encode(content)
  }

  return Prism.highlight(content, grammar, language)
}

function renderLine(line: CodePaneLine, index: number, language: string) {
  const highlighted = highlightLine(line.content, language)

  return (
    <div key={`${line.lineNumber ?? 'null'}-${index}`} className={`flex ${VARIANT_CLASS[line.variant]}`}>
      <span className="w-12 shrink-0 border-r border-base-300 px-2 py-0.5 text-right text-xs opacity-60">
        {line.lineNumber ?? ''}
      </span>
      <code
        className="flex-1 px-3 py-0.5 text-xs"
        dangerouslySetInnerHTML={{ __html: highlighted || '&nbsp;' }}
      />
    </div>
  )
}

export default function CodePane({
  className = '',
  title = 'Code',
  language = 'csharp',
  lines
}: CodePaneProps) {
  return (
    <div className={`space-y-4 p-4 rounded ${className}`}>
      <Label className="text-xs font-semibold">{title}</Label>

      <div className="overflow-auto rounded-md bg-base-300">
        <pre className="min-h-[280px]">
          {lines.map((line, index) => renderLine(line, index, language))}
        </pre>
      </div>
    </div>
  )
}
