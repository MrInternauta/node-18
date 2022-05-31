//Se encuentra en hexadecimal
//let buffer = Buffer.alloc(4); //Save space in memory
// let buffer = Buffer.from([1, 2, 4]); //Save array
let buffer = Buffer.from('Hola xd') // buffer.toString()
let abc = Buffer.alloc(26);
for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;

}
console.log(abc.toString());

// console.log(buffer);