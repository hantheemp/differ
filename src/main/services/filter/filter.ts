import { FilterRule } from './type'
import path from 'path'
import { app } from 'electron'
import { promises } from 'fs'

const FILTERS_FILE_PATH = path.join(app.getPath('userData'), 'filters.json')

const DEFAULT_FILTERS: FilterRule[] = [
  {
    uuid: crypto.randomUUID(),
    extension: '.log',
    directory: null,
    insertedAt: new Date()
  },
  {
    uuid: crypto.randomUUID(),
    extension: null,
    directory: 'node_modules',
    insertedAt: new Date()
  }
]

async function ensureFiltersFile(): Promise<void> {
  try {
    await promises.access(FILTERS_FILE_PATH)
  } catch {
    await promises.mkdir(path.dirname(FILTERS_FILE_PATH), { recursive: true })
    await promises.writeFile(FILTERS_FILE_PATH, JSON.stringify(DEFAULT_FILTERS, null, 2), 'utf-8')
  }
}

export async function loadFiltersFromFile(): Promise<FilterRule[]> {
  await ensureFiltersFile()
  const data = await promises.readFile(FILTERS_FILE_PATH, 'utf-8')
  return JSON.parse(data)
}

export async function saveFiltersToFile(filters: FilterRule[]): Promise<void> {
  await ensureFiltersFile()
  await promises.writeFile(FILTERS_FILE_PATH, JSON.stringify(filters, null, 2), 'utf-8')
}

export function getFormattedExcludeFilter(filters: FilterRule[]): string {
  if (!filters || filters.length === 0) return ''

  const rules = filters
    .map((filter) => {
      if (filter.extension) return `*${filter.extension}`
      if (filter.directory) return `**/${filter.directory}`
      return null
    })
    .filter(Boolean)

  return rules.join(',')
}
