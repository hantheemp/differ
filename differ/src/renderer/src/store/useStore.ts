import { create } from 'zustand'

interface StoreState {
  baselineDirectory: string
  targetDirectory: string

  setBaselineDirectory: (path: string) => void
  setTargetDirectory: (path: string) => void
}

export const useStore = create<StoreState>((set) => ({
  baselineDirectory: '',
  targetDirectory: '',

  setBaselineDirectory: (path) => set({ baselineDirectory: path }),
  setTargetDirectory: (path) => set({ targetDirectory: path })
}))
