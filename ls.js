const fs = require('node:fs')
const fsPromises = require('node:fs/promises')
const path = require('node:path') // Added missing path module

const folder = process.argv[2] ?? '.' // Get folder from command line argument or use current directory

// PROMISES VERSION 
fsPromises.stat(folder)
    .then(stats => { // Get stats of current directory
        console.log(`Promise - Is directory: ${stats.isDirectory()}`)
        console.log(`Promise - Is file: ${stats.isFile()}`)
        return stats // Return stats for next .then()
    })
    .then(stats => { // Now stats is available here
        console.log(`Second check - Is directory: ${stats.isDirectory()}`)
        console.log(`Second check - Is file: ${stats.isFile()}`)
    })
    .catch(err => {
        console.error('Error getting folder stats:', err)
    })

// SYNCHRONOUS VERSION 
try {
    const stats = fs.statSync(folder) // Use regular fs, not fs/promises
    console.log(`Sync - Is directory: ${stats.isDirectory()}`)
    console.log(`Sync - Is file: ${stats.isFile()}`)
} catch (err) {
    console.error('Error with sync stats:', err)
}

// CALLBACK VERSION
fs.readdir(folder, (err, files) => { // Read current directory
    if (err) {
        console.error('Error reading directory:', err)
        return
    }
    console.log('\nCallback version - Directory contents:')
    files.forEach(file => {
        const filePath = path.join(folder, file)
        fs.stat(filePath, (err, stats) => {
            if (err) {
                console.error(`Error getting stats for ${file}:`, err)
                return
            }
            if (stats.isDirectory()) {
                console.log(`[DIR]  ${file}`)
            } else if (stats.isFile()) {
                console.log(`       ${file}`)
            }
        })
    })
})

// ASYNC/AWAIT VERSION
async function ls(directory) {
    try {
        console.log('\nAsync/await version - Directory contents:')
        const files = await fsPromises.readdir(directory)
        for (const file of files) {
            const filePath = path.join(directory, file)
            const stats = await fsPromises.stat(filePath)
            if (stats.isDirectory()) {
                console.log(`[DIR]  ${file}`)
            } else if (stats.isFile()) {
                console.log(`       ${file}`)
            }
        }
    } catch (err) {
        console.error('Error reading directory:', err)
    }
}

ls(folder)


// Synchronous version
// const files = fs.readdirSync('.')
// files.forEach(file => {
//     console.log(file)
// })