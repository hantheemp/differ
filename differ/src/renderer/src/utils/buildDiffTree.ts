import { DiffTreeNode, FileCompareResult } from 'src/shared/fileStatus'

export function buildDiffTree(diffs: FileCompareResult[]): DiffTreeNode[] {
  const root: DiffTreeNode[] = []

  for (const diff of diffs) {
    const parts = diff.path.split(/[/\\]/)
    let currentLevel = root

    parts.forEach((part, index) => {
      let node = currentLevel.find((n) => n.name === part)

      if (!node) {
        node = {
          name: part,
          path: parts.slice(0, index + 1).join('/'),
          type: index === parts.length - 1 ? 'file' : 'directory',
          ...(index === parts.length - 1 && { status: diff.status }),
          children: []
        }
        currentLevel.push(node)
      }

      if (node.children) {
        currentLevel = node.children
      }
    })
  }

  return root
}
