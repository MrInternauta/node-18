import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
const addon = require2('./build/Release/addon.node');

// import addon from './build/Release/addon.node';
console.log(addon.hola());

// Módulos nativos en c++
// JavaScript permite hacer uso de módulos nativos de c++. Para lograr esto debemos instalar sudo npm i -g node-gyp, este modulo de npm nos permite compilar módulos nativos de c++ en node.

// Luego debemos tener listo nuestro archivo de código fuente en c++ junto a otro archivo .gyp, que nos ayudara hacer la compilación a JavaScript.

// En este archivo .gyp le indicamos que va compilar, como se va llamar el archivo resultante y de donde va a tomar la info a convertir, todo esto lo dejamos como un json
//Steps
//node-gyp configure
//node-gyp build
//node index