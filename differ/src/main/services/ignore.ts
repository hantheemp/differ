import { promises as fs } from 'fs'
import * as path from 'path'

export type IgnorePattern = {
  id: string
  type: 'directory' | 'extension'
  pattern: string
  enabled: boolean
}

export type IgnoreConfig = {
  patterns: IgnorePattern[]
}

const CONFIG_FILE = path.join(__dirname, '../../differ-ignore-config.json')
let cachedConfig: IgnoreConfig | null = null

export async function loadIgnoreConfig(): Promise<IgnoreConfig> {
  if (cachedConfig !== null) {
    return cachedConfig
  }
  const configFile = CONFIG_FILE

  try {
    const content = await fs.readFile(configFile, 'utf-8')
    cachedConfig = JSON.parse(content)
    return cachedConfig as IgnoreConfig
  } catch {
    const defaultConfig: IgnoreConfig = {
      patterns: [
        { id: '1', type: 'directory', pattern: 'node_modules', enabled: true },
        { id: '2', type: 'directory', pattern: 'target', enabled: true },
        { id: '3', type: 'directory', pattern: 'dist', enabled: true },
        { id: '4', type: 'directory', pattern: 'out', enabled: true },
        { id: '5', type: 'directory', pattern: 'bin', enabled: true },
        { id: '6', type: 'extension', pattern: 'class', enabled: true },
        { id: '7', type: 'extension', pattern: 'jar', enabled: true },
        { id: '8', type: 'extension', pattern: 'exe', enabled: true },
        { id: '9', type: 'extension', pattern: 'dll', enabled: true },
        { id: '10', type: 'extension', pattern: 'log', enabled: true },
        { id: '11', type: 'extension', pattern: 'iml', enabled: true },
        { id: '12', type: 'extension', pattern: 'lock', enabled: true }
      ]
    }
    cachedConfig = defaultConfig
    await saveIgnoreConfig(defaultConfig)
    return defaultConfig
  }
}

export async function saveIgnoreConfig(config: IgnoreConfig): Promise<void> {
  cachedConfig = config
  const configFile = CONFIG_FILE
  await fs.writeFile(configFile, JSON.stringify(config, null, 2), 'utf-8')
}

export async function addIgnorePattern(
  type: 'directory' | 'extension',
  pattern: string
): Promise<IgnorePattern> {
  const config = await loadIgnoreConfig()
  const newPattern: IgnorePattern = {
    id: Date.now().toString(),
    type,
    pattern,
    enabled: true
  }
  config.patterns.push(newPattern)
  await saveIgnoreConfig(config)
  return newPattern
}

export async function removeIgnorePattern(id: string): Promise<void> {
  const config = await loadIgnoreConfig()
  config.patterns = config.patterns.filter((p) => p.id !== id)
  await saveIgnoreConfig(config)
}

export async function toggleIgnorePattern(id: string): Promise<void> {
  const config = await loadIgnoreConfig()
  const pattern = config.patterns.find((p) => p.id === id)
  if (pattern) {
    pattern.enabled = !pattern.enabled
    await saveIgnoreConfig(config)
  }
}

export async function updateIgnorePattern(
  id: string,
  updates: Partial<IgnorePattern>
): Promise<void> {
  const config = await loadIgnoreConfig()
  const pattern = config.patterns.find((p) => p.id === id)
  if (pattern) {
    Object.assign(pattern, updates)
    await saveIgnoreConfig(config)
  }
}

export function getActiveIgnoreRules(config: IgnoreConfig) {
  return {
    directories: config.patterns
      .filter((p) => p.enabled && p.type === 'directory')
      .map((p) => p.pattern),
    extensions: config.patterns
      .filter((p) => p.enabled && p.type === 'extension')
      .map((p) => p.pattern)
  }
}
