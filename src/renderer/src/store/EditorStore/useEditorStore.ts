import { getLanguageFromFilename } from '@renderer/components/utils/monaco/monacoExtensions'
import { create } from 'zustand'
import { EditorState } from './type'
import { FileNode } from '@renderer/hooks/type'

export const useEditorStore = create<EditorState>((set) => ({
  originalContent: '',
  modifiedContent: '',
  language: 'plaintext',
  isLoadingContent: false,
  activeFile: null,

  openFile: async (file : FileNode) => {

    set({ isLoadingContent: true, language: getLanguageFromFilename(file.name), activeFile: file })

    let original = ''
    let modified = ''

    if (file.status === 'added' && file.modifiedPath) {
      modified = await window.api.readFile(file.modifiedPath)
    } else if (file.status === 'removed' && file.originalPath) {
      original = await window.api.readFile(file.originalPath)
    } else if (file.originalPath && file.modifiedPath) {
      const [origContent, modContent] = await Promise.all([
        window.api.readFile(file.originalPath),
        window.api.readFile(file.modifiedPath)
      ])
      original = origContent
      modified = modContent

    }

    set({ originalContent: original, modifiedContent: modified, isLoadingContent: false })
  }
}))
