import { FilterRule } from "./type";

export const DEFAULT_FILTERS: FilterRule[] = [
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