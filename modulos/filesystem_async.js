const fs = require('fs');
const path = require('path');

function leerFile(ruta, cb) {
  let fileContent = fs.readFile(ruta, function (err, data) {
    if (err) {
      console.error(err);
      return
    }
    console.log(data.toString());

  })
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) {
      console.error('Error writing', err);
      return
    }
    console.log('Escritura terminada');

  });
}

function remove(ruta, cb) {
  fs.unlink(ruta, function (err) {
    if (err) {
      console.error('Error removing', err);
      return
    }
    console.log('Removed');

  })
}
// leerFile(__dirname + '/archivo.txt');
escribir(__dirname + '/archivo2.txt', 'HOlaaa', () => { });
leerFile(__dirname + '/archivo2.txt');
remove(__dirname + '/archivo.txt', () => { })
