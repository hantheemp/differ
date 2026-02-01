import { create } from 'zustand'
import type { StoreState } from '@renderer/types'

export const useStore = create<StoreState>((set) => ({
  baselineDirectory: '',
  targetDirectory: '',
  treeData: [],
  selectedFile: null,

  setBaselineDirectory: (path) => set({ baselineDirectory: path }),
  setTargetDirectory: (path) => set({ targetDirectory: path }),
  selectFile: (file) => set({ selectedFile: file }),
  setTreeData: (data) => set({ treeData: data })
}))
