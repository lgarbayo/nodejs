const { readFile } = require('node:fs/promises')

Promise.all([
  readFile('./file.txt', 'utf-8'),
  readFile('./file copy.txt', 'utf-8')
]).then(([text, textCopy]) => {
  console.log('first: ', text)
  console.log('second: ', textCopy)
})
