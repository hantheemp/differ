import { create } from "zustand";

export const useDirectoryStore = create<DirectoryState>((set, get) => ({
    trigger: 0,
    baselinePath: null,
    targetPath: null,
    setTrigger: () => set({ trigger: get().trigger + 1 }),
    setBaselinePath: (path) => set({ baselinePath: path }),
    setTargetPath: (path) => set({ targetPath: path })
}))