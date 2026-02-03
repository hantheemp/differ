/// <reference types="vite/client" />

interface Window {
  api: {
    selectDirectory: (type: 'baseline' | 'target') => Promise<string | null>
    // Add other methods your preload exposes here
  }
}
