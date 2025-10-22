//.js-> utiliza por defecto commonjs
//.mjs-> para utilizar ES Modules
//.cjs-> para utilizar commonjs

import { sum } from './sum.mjs'; //importar la función sum desde el archivo sum.mjs

console.log(sum(10, 7));
import { multiply, divide, subtract } from './sum.mjs';

console.log(multiply(4, 6));
console.log(divide(20, 4));
console.log(subtract(15, 5));