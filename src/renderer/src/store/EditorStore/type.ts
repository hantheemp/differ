import { FileNode } from "@renderer/hooks/type"

export interface EditorState {
  originalContent: string
  modifiedContent: string
  language: string
  isLoadingContent: boolean,
  activeFile: FileNode | null

  openFile: (fileNode: FileNode) => Promise<void>
}