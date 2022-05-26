function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(`Hola ${nombre}`);
      resolve(nombre)
    }, 1500);
  });
}

function adios(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(`Adios ${nombre}`);
      resolve()
    }, 1000);
  });


}

function hablar(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('Hablando');
      reject('Autogenerado')
    }, 1000);
  })

}
function conversacion(nombre, veces) {
  return new Promise(function (resolve, reject) {
    if (veces <= 0) {
      return resolve(nombre)
    }
    hablar().then(function () {
      conversacion(nombre, --veces)
    })
  })

}


console.log('Iniciando...');
// hola('Felipe').then(function (nombre) {
//   conversacion('Felipe', 5, function () {
//     console.log('Chat finalizado');
//   })
// })


hola('Felipe')
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(function () {
    console.log('Finalizado');
  })
  .catch(function (error) {
    console.error('Hay un error');
    console.error(error);
  })
