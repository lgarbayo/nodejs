const os = require('node:os');

console.log('Operating System:');
console.log('------------------');

console.log('Operating System Name:', os.platform());
console.log('OS Release Version:', os.release());
console.log('Total System Memory (bytes):', os.totalmem()/1024/1024);
console.log('Free System Memory (bytes):', os.freemem()/1024/1024);
console.log('Architecture:', os.arch());
console.log('CPUs', os.cpus()); //<--- vamos a poder escalar procesos en node
console.log('Home Directory:', os.homedir());
console.log('Uptime (seconds):', os.uptime());
