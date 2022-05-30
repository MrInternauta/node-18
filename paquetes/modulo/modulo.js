//WORK WITH BOTH KINDS OF PROJECTS
// export default sayHello;

// import modulo from './modulo.js';
// modulo()

// 👇️ Using CommonJS syntax
//this only work with no module type of projects
// module.exports = {
//   sayHello
// }

// ⛔️ ReferenceError: module is not defined in ES module scope
// This file is being treated as an ES module ...

// note: The error "Module is not defined in ES module scope" occurs when we are trying to use the module.exports CommonJS syntax in ES modules

// the error, use the export keyword to export a member from a file, e.g. export const num = 42.

//For module project we can use
//FOR MODULES
export function sayHello() {
  console.log('Hello world!');
}
//import * as modules from './modulo.js';
//import {sayHello} from './modulo.js';
