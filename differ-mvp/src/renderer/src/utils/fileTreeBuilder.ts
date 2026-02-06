import type { FileResult, TreeNode } from '@renderer/types'

/**
 * Build a tree structure from flat file results
 */
export function buildTreeFromFiles(files: FileResult[]): TreeNode[] {
  const root: TreeNode = {
    name: 'root',
    path: '',
    isFolder: true,
    children: []
  }

  files.forEach((file) => {
    // Normalize path separators to forward slashes
    const normalizedPath = file.path.replace(/\\/g, '/')
    const parts = normalizedPath.split('/')

    let currentNode = root

    parts.forEach((part, index) => {
      const isLastPart = index === parts.length - 1
      const pathSoFar = parts.slice(0, index + 1).join('/')

      // Ensure children array exists
      if (!currentNode.children) {
        currentNode.children = []
      }

      // Find existing child or create new one
      let childNode = currentNode.children.find((child) => child.name === part)

      if (!childNode) {
        childNode = {
          name: part,
          path: pathSoFar,
          isFolder: !isLastPart,
          children: isLastPart ? undefined : []
        }

        // Add file-specific properties only for files (not folders)
        if (isLastPart) {
          childNode.status = file.status
          childNode.baseline = file.baseline
          childNode.target = file.target
        }

        currentNode.children.push(childNode)
      }

      // Move to the child node for next iteration
      if (!isLastPart) {
        currentNode = childNode
      }
    })
  })

  // Return the children of root (not root itself)
  return root.children || []
}
