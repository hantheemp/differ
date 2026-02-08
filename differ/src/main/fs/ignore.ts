import { promises as fs } from 'fs'
import * as path from 'path'

export type IgnoreRules = {
  directories: string[]
  extensions: string[]
}

export async function loadIgnoreRules(rootDir: string): Promise<IgnoreRules> {
  try {
    const content = await fs.readFile(path.join(rootDir, '.differignore'), 'utf-8')

    const rules: IgnoreRules = {
      directories: [],
      extensions: []
    }

    content
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .forEach((line) => {
        if (line.startsWith('*.')) {
          rules.extensions.push(line.slice(2))
        } else {
          rules.directories.push(line)
        }
      })

    return rules
  } catch {
    return { directories: [], extensions: [] }
  }
}

export function shouldIgnore(relativePath: string, rules: IgnoreRules): boolean {
  const parts = relativePath.split(/[/\\]/)
  const ext = relativePath.split('.').pop()?.toLowerCase()

  if (rules.directories.some((d) => parts.includes(d))) {
    return true
  }

  if (ext && rules.extensions.includes(ext)) {
    return true
  }

  return false
}
