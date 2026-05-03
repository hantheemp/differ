export interface EditorState {
  originalContent: string
  modifiedContent: string
  language: string
  isLoadingContent: boolean

  openFile: (fileNode: any) => Promise<void>
}