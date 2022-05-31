import fs from 'node:fs';

//GET __dirname
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//End: GET __dirname

import stream, { Transform } from 'node:stream';
let data = '';
//-------------------------Stream de lectura
let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('utf-8');

readableStream.on('ready', () => {
  console.time();
})
//read chunks
readableStream.on('data', (chunk) => {
  //console.log('Chunks');
  data += chunk;
})

readableStream.on('end', () => {
  //console.log(data);
  console.timeEnd();
})


//----------------STREAM DE ESCRITURA
// process.stdout.write('Hola');
// process.stdout.write('que tal');
// process.stdout.write('que tal');
// process.stdout.write('que tal');
// process.stdout.write('que tal');
// process.stdout.write('que tal');

const Trasform = stream.Transform;
//-----------------------------------Stream bidireccional
class MyMayus extends Trasform {
  _transform(chunk, codif, cb) {
    let chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb()
  }
}

// function Mayus() {
//   Trasform.call(this);
// }


// util.inherits(Mayus, Trasform);
// Mayus.prototype._transform = function (chunk, codif, cb) {
//   let chunkMayus = chunk.toString().toUpperCase();
//   this.push(chunkMayus);
//   cb()
// }
let mayus = new MyMayus();
// readableStream
//   .pipe(mayus)
//   .pipe(process.stdout);



///OTHER WAY TO RESOLVE

// const upperCaseTransform = new Transform({
//   transform(chunk, encoding, callback) {
//     this.push(chunk.toString().toUpperCase());
//     callback();
//   }
// });

// const readableStream2 = createReadStream(__dirname + "/example.txt");

// readableStream2.pipe(upperCaseTransform).pipe(process.stdout);