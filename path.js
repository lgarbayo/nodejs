const path = require('node:path')

console.log(path.sep) // Output: / (on POSIX) or \ (on Windows)

// join paths with path.join
const fullPath = path.join('/users', 'john', 'documents', 'file.txt')
console.log(fullPath) // Output: /users/john/documents/file.txt

const baseName = path.basename(fullPath)
console.log(baseName) // Output: file.txt

const fileName = path.basename(fullPath, '.txt')
console.log(fileName) // Output: file

const dirName = path.dirname(fullPath)
console.log(dirName) // Output: /users/john/documents

const extName = path.extname(fullPath)
console.log(extName) // Output: .txt

// Normalize a path
const messyPath = '/users/john/../john/documents//file.txt'
const normalizedPath = path.normalize(messyPath)
console.log(normalizedPath) // Output: /users/john/documents/file.txt

// Resolve a sequence of paths to an absolute path
const absolutePath = path.resolve('documents', 'file.txt')
console.log(absolutePath) // Output: /current/working/directory/documents/file.txt
// (the actual output will depend on the current working directory)