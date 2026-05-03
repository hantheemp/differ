import { create } from 'zustand'

export const useSettingsStore = create<SettingsState>((set) => ({
  isOpen: false,
  toggleSettings: () => set((state) => ({ isOpen: !state.isOpen })),
  closeSettings: () => set({ isOpen: false })
}))
