import { useEffect, useState } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-csharp'

import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import 'prismjs/plugins/line-highlight/prism-line-highlight'
import 'prismjs/plugins/line-highlight/prism-line-highlight.css'

import Label from '../Label/Label'
import type { CodePaneProps } from './types'

export default function CodePane({ className = '', title = 'Code' }: CodePaneProps) {
  const [code, setCode] = useState('')

  useEffect(() => {
    setCode(`
using System;

namespace DemoApp {
    public class Program {
        public static void Main(string[] args) {
            Console.WriteLine("Hello, World!");
        }
    }
}
`)
  }, [])

  useEffect(() => {
    Prism.highlightAll()
  }, [code])

  return (
    <div className={`space-y-4 p-4 rounded ${className}`}>
      <Label className="text-xs font-semibold">{title}</Label>

      <div className="flex-1 overflow-auto">
        <pre className="bg-base-300 rounded-md h-full line-numbers" data-line="6">
          <code className="language-csharp">{code}</code>
        </pre>
      </div>
    </div>
  )
}
