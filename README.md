# differ

Differ is an Electron application that uses the dir-compare library to compare two directories and Monaco Editor to view the differences. This application is developed for projects that are not suitable for any version control system (Git, SVN, etc.) or where the use of such systems is considered a security risk.

## Overview

Differ is specifically designed for institutions operating in telecommunications, banking, defense industries, and air-gapped networks. It provides an advanced code comparison experience similar to VS Code while ensuring that your data never leaves your local machine.

## Key Features

- Deep Directory Comparison: Instantly detects modified, added, or deleted files using the dir-compare engine.
- Advanced Code Comparison: Provides syntax highlighting and side-by-side comparison through Monaco Editor integration.
- Dynamic Filtering System: Offers persistent and customizable filtering to exclude node_modules, .git, or specific file extensions.
- Fully Offline and Secure: Does not include any cloud synchronization or external server connections.
- Modern Interface: Fast and user-friendly file tree structure built with React and Tailwind CSS.

## Tech Stack

- Framework: Electron
- Frontend: React (TypeScript)
- Editor: Monaco Editor (@monaco-editor/react)
- State Management: Zustand
- Styling: Tailwind CSS
- Comparison Engine: dir-compare

## Why differ?

In regulated or high-security industries, transferring code to external repositories or even using local Git instances can be considered a security breach. Developers are often forced to manually compare folders using NPP or use outdated tools. Differ fills this gap by offering a modern developer experience without relying on any version control system.

## Installation and Running

### Prerequisites
Node.js must be installed on your system.

### Steps

1. Clone the repository or download the source code:
   git clone https://github.com/username/differ.git
   cd differ

2. Install dependencies:
   npm install

3. Run the application in development mode:
   npm run dev

### Building for Production

To build the application into an executable file:
npm run build

The compiled files will be located in the dist or release folder depending on your bundler configuration.

## Usage

1. Launch the application.
2. Select the Baseline Directory path (Original or older version).
3. Select the Target Directory path (Modified or newer version).
4. Set the file or folder ignore rules from the settings section.
5. Click the Run Diff button to start the process.
6. Select the changed files from the file tree on the left to examine the line-by-line differences in the editor on the right.

## License
See [LICENSE](https://github.com/hantheemp/differ/blob/main/LICENSE) for details.
