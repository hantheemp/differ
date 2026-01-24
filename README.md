# Differ

A local, offline desktop tool for comparing two versions of the same software project, designed for restricted corporate environments where version control systems are unavailable.

## Overview

Differ provides systematic file-level and line-level comparison of software projects without requiring network access, external APIs, or version control systems. It is built for environments where tools like Git are forbidden and developers need a reliable, reproducible way to understand changes across entire codebases.

## Key Features

- **Fully Offline**: No network calls, no external dependencies, all operations are local
- **Scalable**: Handles projects with hundreds or thousands of files efficiently
- **Structured Comparison**: Three-step strategy (path matching → hash comparison → line-level diff)
- **Deterministic Results**: Reproducible comparisons with consistent output
- **UI-Agnostic Core**: Comparison engine separated from presentation layer
- **Hash-Based Optimization**: SHA-256 hashing avoids unnecessary line-by-line comparisons

## Motivation

In restricted corporate environments, developers often resort to manual comparisons using editor plugins like Notepad++ Compare. This approach:

- Does not scale to large projects
- Provides no structured output
- Makes it difficult to reason about changes across an entire codebase

Differ solves these problems with a systematic comparison pipeline that identifies file-level changes first, then drills down into line-level differences only where necessary.

## How It Works

### Three-Step Comparison Strategy

1. **Path Matching**
   - Each file is identified by its relative path from the project root (e.g., `src/service/UserService.java`)
   - Files with matching relative paths in both projects are considered the same logical file

2. **Hash Comparison**
   - SHA-256 hash is calculated for each file
   - Identical hashes → file marked as **UNCHANGED**
   - Different hashes → file marked as **MODIFIED** and queued for line-level analysis
   - This step avoids unnecessary line-by-line comparisons

3. **Line-Level Diff**
   - Only modified files are processed further
   - Files are read line by line and compared using an internal diff engine
   - Changes are categorized as **INSERT**, **DELETE**, or **CHANGE**
   - Each change records line numbers and before/after content

## Project Structure

```
com.muratkagan.differ
├── core.identity
│   └── ProjectScanner          # Walks directories and maps relative paths
├── util
│   └── FileHasher              # SHA-256 hashing utility
├── diff
│   ├── LineDiffService         # Produces line-level diffs for modified files
│   └── model
│       ├── FileDiffResult      # Holds all line changes for a single file
│       ├── LineChange          # Represents a single line change
│       └── LineChangeType      # Enum: INSERT / DELETE / CHANGE
└── DifferApplication           # Application entry point
```

## Example Output

### File-Level Comparison

```
DELETED: 1.txt
DELETED: 4.txt
ADDED: 5.txt
UNCHANGED: 3.txt
MODIFIED: 2.txt
```

### Line-Level Diff (Modified File)

```
MODIFIED: 2.txt
  ~ [3 → 3] System.out.println("Hello");
            System.out.println("Hello world");
  + [7] System.out.println("New line added");
  - [10] obsoleteMethod();
```

**Legend:**
- `~` = Line changed
- `+` = Line inserted
- `-` = Line deleted

## Design Principles

### 1. Offline-First Architecture
All operations are performed locally with no network dependencies, making Differ suitable for air-gapped or restricted environments.

### 2. Abstraction Over Implementation
Third-party diff libraries are used internally but never exposed outside the diff layer. Domain models (`LineChange`, `FileDiffResult`) form a stable API for higher layers.

### 3. UI Independence
The core comparison engine has no dependencies on Swing or any UI framework. This separation allows future interfaces (CLI, web, desktop) to be added without refactoring comparison logic.

### 4. Deterministic Behavior
Comparison results are reproducible and consistent across runs, ensuring reliability for auditing and compliance purposes.

## Build and Run

Differ is a Maven project that produces a fat JAR containing all required dependencies.

### Prerequisites

- Java 8 or higher
- Maven 3.6+

### Build

```bash
mvn clean package
```

### Run

```bash
java -jar target/differ.jar
```

**Note:** Project paths are currently configured directly inside `DifferApplication` for development and testing purposes.

## Current Status

### Implemented
- Project scanning and file enumeration
- SHA-256 file hashing
- File-level diff (ADDED/DELETED/MODIFIED/UNCHANGED)
- Line-level diff with change categorization
- Stable domain models and API

### Planned
- Swing-based side-by-side diff viewer
- Performance optimizations for very large projects
- Export formats (plain text, JSON, HTML)
- Configuration file support for project paths

## Future Improvements

Planned enhancements include:

- **UI Layer**: Swing-based side-by-side diff viewer with syntax highlighting
- **Ignore Rules**: Configurable whitespace, comment, and pattern-based ignore rules
- **Unified Diff Format**: Industry-standard unified diff headers and patches
- **Binary File Detection**: Identify and skip binary files automatically
- **Export Options**: Save diff results to text, JSON, or HTML reports
- **Custom Filters**: Allow users to exclude files by extension or path pattern
- **Performance**: Parallel processing for very large projects
- **Configuration**: External configuration file for project paths and settings

## Use Cases

Differ is ideal for:

- **Regulated Environments**: Financial, government, or defense sectors where Git is prohibited
- **Code Auditing**: Reviewing changes between releases without version control
- **Vendor Code Comparison**: Comparing customized vendor code against original versions
- **Offline Development**: Air-gapped environments with no external connectivity
- **Educational Purposes**: Learning about diff algorithms and file comparison strategies

## Technical Notes

### Third-Party Dependencies

Differ uses established diff algorithms internally but wraps them in project-specific abstractions. This approach:

- Prevents vendor lock-in
- Ensures the core API remains stable even if underlying libraries change
- Allows algorithm swapping without affecting consumers

### Performance Considerations

- **Hash-First Strategy**: Most files in typical projects are unchanged. SHA-256 hashing is fast and eliminates the majority of line-by-line comparisons.
- **Lazy Processing**: Line-level diffs are only computed for files that actually changed.
- **Scalability**: Tested with projects containing thousands of files.

## License

This is an internal and experimental tool intended for educational and internal use.

## Contributing

This project is currently in development. Contributions, suggestions, and feedback are welcome as the tool evolves.

---

**Differ** – Systematic project comparison for restricted environments.