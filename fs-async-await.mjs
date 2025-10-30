import { readFile } from 'node:fs/promises'

console.log("Reading file: ")
const text = await readFile('./file.txt', 'utf-8')
console.log("first: ", text)

console.log("Reading file copy: ")
const textCopy = await readFile('./file copy.txt', 'utf-8')
console.log("second: ", textCopy)