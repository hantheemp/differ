import { useEffect, useMemo, useState } from 'react'
import CodePane from '@renderer/atoms/CodePane/CodePane'
import type { CodePaneLine } from '@renderer/atoms/CodePane/types'
import HorizontalSplit from '@renderer/molecules/HorizontalSplit/HorizontalSplit'
import { useStore } from '@renderer/store/useStore'
import { computeUnifiedLineDiff } from '@renderer/services/diffService'
import { mapUnifiedDiffToSplit } from '@renderer/utils/diffMapping'

function getFallbackLines(message: string): CodePaneLine[] {
  return [
    {
      lineNumber: null,
      content: message,
      variant: 'placeholder'
    }
  ]
}

export default function DiffView() {
  const { selectedFile } = useStore()
  const [baselineContent, setBaselineContent] = useState('')
  const [targetContent, setTargetContent] = useState('')

  useEffect(() => {
    let isMounted = true

    async function loadContents() {
      if (!selectedFile || selectedFile.isFolder) {
        if (isMounted) {
          setBaselineContent('')
          setTargetContent('')
        }
        return
      }

      const [baseline, target] = await Promise.all([
        selectedFile.baseline ? window.api.readFile(selectedFile.baseline) : Promise.resolve(''),
        selectedFile.target ? window.api.readFile(selectedFile.target) : Promise.resolve('')
      ])

      if (isMounted) {
        setBaselineContent(baseline)
        setTargetContent(target)
      }
    }

    void loadContents()

    return () => {
      isMounted = false
    }
  }, [selectedFile])

  const splitDiff = useMemo(() => {
    if (!selectedFile || selectedFile.isFolder) {
      return null
    }

    const unifiedDiff = computeUnifiedLineDiff(baselineContent, targetContent)
    return mapUnifiedDiffToSplit(unifiedDiff)
  }, [baselineContent, selectedFile, targetContent])

  const leftLines = useMemo<CodePaneLine[]>(() => {
    if (!selectedFile || selectedFile.isFolder) {
      return getFallbackLines('Select a file to view differences.')
    }

    if (!splitDiff || splitDiff.left.length === 0) {
      return getFallbackLines('No content available in baseline file.')
    }

    return splitDiff.left.map((line) => ({
      content: line.content,
      lineNumber: line.lineNumber,
      variant:
        line.kind === 'removed'
          ? 'removed'
          : line.kind === 'added'
            ? 'added'
            : line.kind === 'empty'
              ? 'placeholder'
              : 'default'
    }))
  }, [selectedFile, splitDiff])

  const rightLines = useMemo<CodePaneLine[]>(() => {
    if (!selectedFile || selectedFile.isFolder) {
      return getFallbackLines('Select a file to view differences.')
    }

    if (!splitDiff || splitDiff.right.length === 0) {
      return getFallbackLines('No content available in target file.')
    }

    return splitDiff.right.map((line) => ({
      content: line.content,
      lineNumber: line.lineNumber,
      variant:
        line.kind === 'added'
          ? 'added'
          : line.kind === 'removed'
            ? 'removed'
            : line.kind === 'empty'
              ? 'placeholder'
              : 'default'
    }))
  }, [selectedFile, splitDiff])

  return (
    <HorizontalSplit
      defaultSize="center"
      min={300}
      max={1000}
      left={<CodePane title="Baseline" lines={leftLines} />}
      right={<CodePane title="Target" lines={rightLines} />}
    />
  )
}
