import { create } from 'zustand'

interface TreeNode {
  name: string
  path: string
  isFolder: boolean
  status?: 'modified' | 'added' | 'deleted' | 'unchanged'
  expanded?: boolean
  children?: TreeNode[]
}

interface StoreState {
  baselineDirectory: string
  targetDirectory: string
  treeData: TreeNode[]
  selectedFile: TreeNode | null

  setBaselineDirectory: (path: string) => void
  setTargetDirectory: (path: string) => void
  selectFile: (file: TreeNode) => void
  setTreeData: (data: TreeNode[]) => void
}

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
