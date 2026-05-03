import { compare as dirCompare, CompareFileHandler, fileCompareHandlers } from 'dir-compare'
import fs from 'fs'

export const monacoCompatibleCompare: CompareFileHandler = {
  compareSync: (path1, stat1, path2, stat2, options) => {
    return fileCompareHandlers.lineBasedFileCompare.compareSync(path1, stat1, path2, stat2, options)
  },

  compareAsync: async (path1, stat1, path2, stat2, options) => {
    const normalize = (filePath: string) =>
      fs
        .readFileSync(filePath, 'utf-8')
        .split(/\r?\n/)
        .map(line => line.trimEnd())
        .join('\n')
        .trim()

    return normalize(path1) === normalize(path2)
  }
}