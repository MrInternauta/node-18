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
(async function () {
  try {
    await hola('Felipe')
    await hablar('Felipe')
    await adios('Felipe')
  } catch (error) {
    console.error('Hay un error');
    console.error(error);
  }
  console.log('Chat finalizado');

})();

