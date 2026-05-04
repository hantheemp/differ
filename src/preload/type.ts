export type FileStatus = 'added' | 'removed' | 'modified' | 'unchanged'

export type CompareResult = {
  path: string
  status: FileStatus
}
export interface FilterRule {
    uuid : string
    extension?: string
    directory?: string
    insertedAt: Date
}