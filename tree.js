const fs = require('node:fs')
const fsPromises = require('node:fs/promises')
const path = require('node:path')

// tree characters
const TREE_CHARS = {
  vertical: '│   ',
  branch: '├── ',
  lastBranch: '└── ',
  empty: '    '
}

// SYNCHRONOUS VERSION
function treeSyncRecursive (dirPath, prefix = '', isLast = true, depth = 0, maxDepth = 10) {
  if (depth > maxDepth) return

  try {
    const stats = fs.statSync(dirPath)
    const name = path.basename(dirPath)

    // Print the current item
    if (depth > 0) {
      console.log(prefix + (isLast ? TREE_CHARS.lastBranch : TREE_CHARS.branch) + name)
    } else {
      console.log(name)
    }

    // If it's a directory, process its contents
    if (stats.isDirectory()) {
      const items = fs.readdirSync(dirPath)
        .filter(item => !item.startsWith('.')) // Filter hidden files
        .map(item => ({
          name: item,
          path: path.join(dirPath, item),
          isDirectory: fs.statSync(path.join(dirPath, item)).isDirectory()
        }))
        .sort((a, b) => {
          // Directories first, then files, both alphabetically
          if (a.isDirectory && !b.isDirectory) return -1
          if (!a.isDirectory && b.isDirectory) return 1
          return a.name.localeCompare(b.name)
        })

      items.forEach((item, index) => {
        const isLastItem = index === items.length - 1
        const newPrefix = prefix + (depth === 0 ? '' : (isLast ? TREE_CHARS.empty : TREE_CHARS.vertical))

        treeSyncRecursive(item.path, newPrefix, isLastItem, depth + 1, maxDepth)
      })
    }
  } catch (err) {
    console.error(`Error accessing ${dirPath}: ${err.message}`)
  }
}

// ASYNC VERSION
async function treeAsyncRecursive (dirPath, prefix = '', isLast = true, depth = 0, maxDepth = 10) {
  if (depth > maxDepth) return

  try {
    const stats = await fsPromises.stat(dirPath)
    const name = path.basename(dirPath)

    // Print the current item
    if (depth > 0) {
      console.log(prefix + (isLast ? TREE_CHARS.lastBranch : TREE_CHARS.branch) + name)
    } else {
      console.log(name)
    }

    // If it's a directory, process its contents
    if (stats.isDirectory()) {
      const itemNames = await fsPromises.readdir(dirPath)
      const items = []

      // Get information about each item
      for (const itemName of itemNames) {
        if (itemName.startsWith('.')) continue // Filter hidden files

        try {
          const itemPath = path.join(dirPath, itemName)
          const itemStats = await fsPromises.stat(itemPath)
          items.push({
            name: itemName,
            path: itemPath,
            isDirectory: itemStats.isDirectory()
          })
        } catch (err) {
          console.error(`Error accessing ${itemName}: ${err.message}`)
        }
      }

      // Sort items
      items.sort((a, b) => {
        if (a.isDirectory && !b.isDirectory) return -1
        if (!a.isDirectory && b.isDirectory) return 1
        return a.name.localeCompare(b.name)
      })

      // Process each item
      for (let i = 0; i < items.length; i++) {
        const item = items[i]
        const isLastItem = i === items.length - 1
        const newPrefix = prefix + (depth === 0 ? '' : (isLast ? TREE_CHARS.empty : TREE_CHARS.vertical))

        await treeAsyncRecursive(item.path, newPrefix, isLastItem, depth + 1, maxDepth)
      }
    }
  } catch (err) {
    console.error(`Error accessing ${dirPath}: ${err.message}`)
  }
}

// Main function
async function tree () {
  const targetDir = process.argv[2] || '.'
  const maxDepth = parseInt(process.argv[3]) || 10
  const useAsync = process.argv.includes('--async')

  console.log(`\n📁 Estructura de directorios (${useAsync ? 'Asíncrono' : 'Síncrono'}):`)
  console.log('═'.repeat(50))

  if (useAsync) {
    await treeAsyncRecursive(path.resolve(targetDir), '', true, 0, maxDepth)
  } else {
    treeSyncRecursive(path.resolve(targetDir), '', true, 0, maxDepth)
  }

  console.log('═'.repeat(50))
}

// Run
tree().catch(console.error)
