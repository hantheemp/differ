interface CompareState {
    compareTime: number | null
    setCompareTime: (time : number) => void
    totalFiles
  totalAdded
  totalRemoved
  totalModified
  totalUnmodified
  setTotalFiles: (count : number) => void
  setTotalAdded: (count : number) => void
  setTotalRemoved: (count : number) => void
  setTotalModified: (count : number) => void
  setTotalUnmodified: (count : number) => void
}