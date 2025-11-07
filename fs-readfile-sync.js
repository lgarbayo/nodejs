const fs = require('node:fs')

console.log("Reading file synchronously: ")
fs.readFileSync('./file.txt', 'utf-8', (err, text) => {
    console.log(text)
})

console.log("Reading file copy synchronously: ")
fs.readFileSync('./file copy.txt', 'utf-8', (err, textCopy) => {
    console.log(textCopy)
})