interface DirectoryState {
  trigger: number,
  baselinePath: string | null
  targetPath: string | null
  setTrigger: () => void
  setBaselinePath: (path: string) => void
  setTargetPath: (path: string) => void
}
