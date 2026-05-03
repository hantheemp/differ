import { create } from 'zustand'

export const useCompareStore = create<CompareState>((set, get) => ({
  compareTime: null,
  setCompareTime: (time) => set({ compareTime: time }),
  totalFiles: 0,
  totalAdded: 0,
  totalRemoved: 0,
  totalModified: 0,
  totalUnmodified: 0,
  setTotalFiles: (count) => set({ totalFiles: count }),
  setTotalAdded: (count) => set({ totalAdded: count }),
  setTotalRemoved: (count) => set({ totalRemoved: count }),
  setTotalModified: (count) => set({ totalModified: count }),
  setTotalUnmodified: (count) => set({ totalUnmodified: count })
}))
