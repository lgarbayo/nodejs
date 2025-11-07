console.log('Process ID:', process.pid)
console.log('Node.js Version:', process.version)
console.log('Platform:', process.platform)

console.log(process.cwd()) // Current working directory
console.log(process.argv) // Command line arguments

// control process and exit
process.exit(1) // Exit with code 1

// escucha el evento exit
// process.on('exit', (code) => {
//    console.log(`About to exit with code: ${code}`)
// })

// platform
console.log('Platform:', process.platform)

// environment variables
console.log('Environment Variables:', process.env)
