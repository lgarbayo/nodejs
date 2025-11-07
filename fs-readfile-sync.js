const fs = require('node:fs')

console.log("Reading file synchronously: ")
try {
    const text = fs.readFileSync('./file.txt', 'utf-8')
    console.log(text)
} catch (err) {
    console.error(err)
}

console.log("Reading file copy synchronously: ")
try {
    const textCopy = fs.readFileSync('./file copy.txt', 'utf-8')
    console.log(textCopy)
} catch (err) {
    console.error(err)
}