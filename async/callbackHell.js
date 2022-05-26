function hola(nombre, micallback) {
  setTimeout(() => {
    console.log(`Hola ${nombre}`);
    micallback()
  }, 1500);
}

function adios(nombre, micallback) {
  setTimeout(() => {
    console.log(`Adios ${nombre}`);
    micallback()
  }, 1000);
}

function hablar(micallback) {
  setTimeout(() => {
    console.log('Hablando');
    micallback()
  }, 1000);
}
function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback)
    })
  }
  else {
    adios(nombre, callback)
  }
}


console.log('Iniciando...');
hola('Felipe', function () {
  conversacion('Felipe', 5, function () {
    console.log('Chat finalizado');
  })
});