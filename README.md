# Node.js Basics Crash Course

Hands-on collection of small Node.js scripts I use to explain the platform’s core modules, runtime APIs, and module systems. Each file focuses on one concept so you can open it and run it immediately with `node <file>`. The repository mixes CommonJS (`.cjs`), ECMAScript Modules (`.mjs`), and plain `.js` files to show the differences side by side.

## What’s Inside

- **Modules 101** – `cjs/` and `mjs/` show how `require`/`module.exports` compares to `import`/`export`, including simple math helpers.
- **Filesystem recipes** – `fs.js`, `fs-readfile-sync.js`, `fs-async-await*.js`, and `ls.js` cover callbacks, promises, async/await, parallel reads, and directory inspection.
- **Process & OS insights** – `process.js`, `os-info.js`, and `os-info.mjs` log environment details, arguments, CPU info, etc.
- **Networking** – `http.js` spins up a basic HTTP server and auto-selects an available port using `free-port.js` plus `picocolors` for colored logs.
- **Path utilities** – `path.js` is a quick reference for `path.join`, `basename`, `dirname`, `extname`, `normalize`, and `resolve`.
- **Custom CLI tools** – `ls.js` and especially `tree.js` re-create familiar shell utilities using only the Node standard library.

## Quick Start

```bash
npm install        # pulls picocolors + dev deps
node fs.js         # run any script directly
node http.js       # starts the demo HTTP server
PORT=4000 node http.js   # environment variables work as usual
```

> Tip: every script is self-contained. Read the file, run it with Node, and tweak it to experiment.

## The Highlight: `tree.js`

`tree.js` re-implements the classic `tree` command without external packages. It supports both synchronous and async traversals, filters hidden files, and limits recursion depth to avoid gigantic outputs.

### Usage

```bash
node tree.js                 # current directory, sync version
node tree.js src 3           # inspect ./src up to depth 3
node tree.js .. 5 --async    # async traversal with custom depth
```

How it works:

1. Uses `fs.stat`/`fs.readdir` (sync or async) to walk the directory tree.
2. Sorts directories before files for a tidy view.
3. Prints branches with custom characters (`│`, `├──`, `└──`) to mimic the real command.
4. Accepts `targetDir`, `maxDepth`, and `--async` through `process.argv`.

This makes `tree.js` a great exercise in recursion, CLI ergonomics, and mixing sync/async file APIs.

## Suggested Learning Path

1. **Console & globals**: Start with `cjs/index.js` to see how CommonJS modules expose functions.
2. **Filesystem basics**: Compare `fs-readfile-sync.js`, `fs.js`, and `fs-async-await.js` to understand the evolution from callbacks to async/await.
3. **Parallelism**: Run `fs-async-await-parallel.js` to see how `Promise.all` speeds up independent reads.
4. **Process/OS data**: Execute `process.js` and `os-info.js` to inspect runtime info and environment variables.
5. **CLI utilities**: Explore `ls.js` and then dive into `tree.js` for a full-featured command clone.
6. **Networking**: Finish with `http.js` + `free-port.js` to learn about HTTP servers and port management.

## Requirements

- Node.js **18+** (for native `node:` specifiers and top-level await in `.mjs` files).
- npm (already bundled with Node) if you want to install dependencies.

## License

MIT © Luis Garbayo Fernández
