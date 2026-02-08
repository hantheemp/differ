let baseDir = ''
let targetDir = ''

export function setCompareContext(base: string, target: string) {
  baseDir = base
  targetDir = target
}

export function getBaseDir() {
  return baseDir
}

export function getTargetDir() {
  return targetDir
}
