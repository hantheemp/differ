import { create } from 'zustand'
import type { StoreState } from '@renderer/types'

export const useStore = create<StoreState>((set) => ({
  baselineDirectory: '',
  targetDirectory: '',
  treeData: [],
  selectedFile: null,
  stats: {
    added: 0,
    modified: 0,
    deleted: 0,
    unchanged: 0
  },

  setBaselineDirectory: (path) => set({ baselineDirectory: path }),
  setTargetDirectory: (path) => set({ targetDirectory: path }),
  selectFile: (file) => set({ selectedFile: file }),
  setTreeData: (data) => set({ treeData: data }),
  setStats: (stats) => set({ stats })
}))
