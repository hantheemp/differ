import { useState, useEffect } from 'react'
import { IgnorePattern } from '../../../preload/index.d'

export default function IgnoreSettings() {
  const [patterns, setPatterns] = useState<IgnorePattern[]>([])
  const [newPattern, setNewPattern] = useState('')
  const [newType, setNewType] = useState<'directory' | 'extension'>('directory')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    loadPatterns()
  }, [])

  async function loadPatterns() {
    const data = await window.api.ignoreLoad()
    setPatterns(data)
  }

  async function handleAdd() {
    if (!newPattern.trim()) return

    await window.api.ignoreAdd(newType, newPattern.trim())
    setNewPattern('')
    await loadPatterns()
  }

  async function handleRemove(id: string) {
    await window.api.ignoreRemove(id)
    await loadPatterns()
  }

  async function handleToggle(id: string) {
    await window.api.ignoreToggle(id)
    await loadPatterns()
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
      >
        ⚙️ Ignore Settings
      </button>

      {isOpen && (
        <div className="absolute top-12 right-0 w-96 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Ignore Patterns</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white text-xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="mb-4 p-3 bg-gray-900 rounded-md">
              <div className="flex gap-2 mb-2">
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value as 'directory' | 'extension')}
                  className="px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                >
                  <option value="directory">Directory</option>
                  <option value="extension">Extension</option>
                </select>

                <input
                  type="text"
                  value={newPattern}
                  onChange={(e) => setNewPattern(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                  placeholder={newType === 'directory' ? 'node_modules' : 'log'}
                  className="flex-1 px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                />

                <button
                  onClick={handleAdd}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded font-medium transition-colors"
                >
                  Add
                </button>
              </div>
              <p className="text-xs text-gray-400">
                {newType === 'directory'
                  ? 'Directory name (e.g., node_modules, .git)'
                  : 'File extension without dot (e.g., log, tmp)'}
              </p>
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto">
              {patterns.length === 0 ? (
                <p className="text-gray-400 text-center py-4">No patterns defined</p>
              ) : (
                patterns.map((pattern) => (
                  <div
                    key={pattern.id}
                    className={`flex items-center gap-2 p-2 rounded ${
                      pattern.enabled ? 'bg-gray-700' : 'bg-gray-900'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={pattern.enabled}
                      onChange={() => handleToggle(pattern.id)}
                      className="w-4 h-4 cursor-pointer"
                    />

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs px-2 py-0.5 rounded ${
                            pattern.type === 'directory'
                              ? 'bg-blue-600 text-white'
                              : 'bg-purple-600 text-white'
                          }`}
                        >
                          {pattern.type === 'directory' ? '📁' : '📄'}
                        </span>
                        <span
                          className={`font-mono ${
                            pattern.enabled ? 'text-white' : 'text-gray-500'
                          }`}
                        >
                          {pattern.type === 'extension' && '*.'}
                          {pattern.pattern}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemove(pattern.id)}
                      className="px-2 py-1 text-red-400 hover:text-red-300 hover:bg-red-900/30 rounded transition-colors"
                      title="Remove"
                    >
                      🗑️
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-gray-700">
              <p className="text-xs text-gray-400">
                💡 Patterns are applied to both directories. Changes trigger automatic
                re-comparison.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
