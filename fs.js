const fs = require('node:fs/promises') // a partir de node 16 se recomienda usar node:
// o en vez de promises se puede usar { promisify } de node:util
// const { promisify } = require('node:util')
// const readFile = promisify(fs.readFile)

// const stats = fs.statSync('./file.txt')
// console.log(stats)
// console.log(
//     stats.isFile(),
//     stats.isDirectory(),
//     stats.isSymbolicLink(),
//     stats.size
// )

/*
console.log("Reading file: ")
fs.readFile('./file.txt', 'utf-8', (err, text) => {
    console.log("first: ", text)
})

console.log("Reading file copy: ")
fs.readFile('./file copy.txt', 'utf-8', (err, textCopy) => {
    console.log("second: ", textCopy)
})
*/

console.log("Reading file: ")
fs.readFile('./file.txt', 'utf-8')
    .then((text) => console.log(text))
    .catch((err) => console.log(err))

console.log("Reading file copy: ")
fs.readFile('./file copy.txt', 'utf-8')
    .then((textCopy) => console.log(textCopy))
    .catch((err) => console.log(err))
