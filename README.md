# differ

A professional desktop file comparison tool built with Electron, React, and TypeScript. Compare two project directories side-by-side with syntax highlighting and visual status indicators.

## Features

- 🔄 **Directory Comparison** - Select baseline and target directories for comparison
- 🌳 **File Tree Navigation** - Hierarchical view of changed files with status indicators
- 📄 **Syntax Highlighting** - Code preview with PrismJS highlighting
- 🎨 **Responsive UI** - Resizable panes with snap-to-grid support
- 💾 **Multi-Platform** - Builds for Windows, macOS, and Linux
- ⚡ **Fast & Lightweight** - Built with modern tools (Vite, React 19, TypeScript)

## Tech Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| **Desktop Framework** | Electron | 39.x |
| **UI Library** | React | 19.x |
| **Language** | TypeScript | 5.x |
| **Build Tool** | Vite | 6.x |
| **Styling** | TailwindCSS + DaisyUI | Latest |
| **State Management** | Zustand | 5.x |
| **Code Highlighting** | PrismJS | 1.30.x |
| **Icons** | Lucide React | 0.563.x |

## Getting Started

### Prerequisites

- **Node.js** 18+ (verify with `node --version`)
- **npm** 9+ (verify with `npm --version`)

### Installation

```bash
# Clone the repository
git clone https://github.com/hantheemp/differ.git
cd differ

# Install dependencies
npm install
```

### Development

```bash
# Start development server with hot reload
npm run dev
```

The app will open automatically. Changes to source files trigger HMR (Hot Module Replacement).

### Building

Build for your target platform:

```bash
# Windows
npm run build:win

# macOS
npm run build:mac

# Linux
npm run build:linux
```

Built binaries are output to the `dist/` directory.

### Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run preview          # Preview production build

# Building
npm run build            # Build app (runs typecheck first)
npm run build:win        # Build Windows installer
npm run build:mac        # Build macOS app
npm run build:linux      # Build Linux AppImage

# Code Quality
npm run typecheck        # Run TypeScript type checking
npm run lint             # Run ESLint
npm run format           # Format code with Prettier
```

## Project Architecture

### Directory Structure

```
src/
├── main/               # Electron main process
│   └── index.ts        # App initialization, IPC handlers
├── preload/            # IPC bridge (secure context)
│   └── index.ts        # Preload scripts, API definitions
└── renderer/           # React application
    └── src/
        ├── App.tsx     # Root component
        ├── main.tsx    # React entry point
        ├── atoms/      # Basic UI components (Button, Label, etc.)
        ├── molecules/  # Composed components (TreeItem, DirectoryInput, etc.)
        ├── organisms/  # Complex business components (FileTree, DiffView, etc.)
        ├── templates/  # Page-level layouts (DiffTemplate)
        ├── store/      # Global state (Zustand)
        └── types/      # TypeScript interfaces (domain, store, components)
```

### Atomic Design Pattern

This project uses **Atomic Design** for component organization:

- **Atoms** - Smallest, reusable UI components (Button, Label, TextInput)
- **Molecules** - Combinations of atoms (DirectoryInput, TreeItem, HorizontalSplit)
- **Organisms** - Complex features using molecules (FileTree, DiffView, Directory)
- **Templates** - Page layouts using organisms (DiffTemplate)

### Type Organization

All TypeScript types are organized by concern:

- `types/domain.ts` - Business domain types (TreeNode, FileStatus, ComparisonResult)
- `types/store.ts` - Global state types (StoreState)
- `atoms/*/type.ts` - Component-specific prop types
- `molecules/*/type.ts` - Component-specific prop types

This colocated type approach scales well and keeps each component self-contained.

### State Management

**Zustand** is used for global state:

```typescript
import { useStore } from '@renderer/store/useStore'

export function MyComponent() {
  const { baselineDirectory, setBaselineDirectory } = useStore()
  // ...
}
```

**State includes:**
- Directory paths (baseline, target)
- File tree data
- Selected file
- *(Future: loading states, error handling, comparison results)*

## IDE Setup

### Recommended

- [VSCode](https://code.visualstudio.com/)
- [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### VSCode Settings

Add to `.vscode/settings.json` for auto-formatting:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[typescript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[typescriptreact]": { "editor.defaultFormatter": "esbenp.prettier-vscode" }
}
```

## Development Workflow

### Adding a New Component

1. **Create component file** in appropriate folder (atoms/molecules/organisms)
2. **Create type.ts** file for component props
3. **Import types** in component: `import type { ComponentProps } from './type'`
4. **Use global types** as needed: `import type { TreeNode } from '@renderer/types'`
5. **Test integration** with parent components

### Making a Commit

```bash
# Stage changes
git add .

# Run checks before committing
npm run typecheck
npm run lint

# Commit
git commit -m "feat: add new component"
```

### Build Before Release

```bash
# Full build with checks
npm run build

# Build for target platform
npm run build:win
```

## Troubleshooting

### Port Already in Use

If you get "port already in use" error:

```bash
# Kill the process on port 5173
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:5173 | xargs kill -9
```

### TypeScript Errors

Run type checking:

```bash
npm run typecheck
```

### Lint Issues

Auto-fix lint issues:

```bash
npm run lint -- --fix
```

## Future Enhancements

- [ ] Actual file comparison logic
- [ ] Line-by-line diff visualization
- [ ] Filter/search in file tree
- [ ] Export comparison results
- [ ] Settings/preferences
- [ ] Undo/redo support

## Contributing

When contributing, ensure:

- Types are properly defined in `types/` or component `type.ts`
- Components follow atomic design patterns
- Code is formatted with Prettier
- TypeScript passes strict mode checks
- ESLint passes without warnings

## License

MIT
