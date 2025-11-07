/*
console.log("hello world");
console.log("This is a simple Node.js application.");
console.info("Application started successfully.");
console.warn("This is a warning message.");
console.error("This is an error message.");
console.debug("Debugging information.");
console.trace("Trace message for debugging.");
console.log("Goodbye world!");
console.log(globalThis); //variable global en toda nuestra aplicacion
//apunta a window en el navegador
//apunta a global en nodejs
globalThis.console.log("This is a message from globalThis console.");
*/

// VAMOS A UTILIZAR EL PATRÓN DE DISEÑO : MÓDULO
// COMMONJS require module

const { sum } = require('./sum.js') // importar la función sum desde el archivo sum.js
console.log(sum(5, 3))
