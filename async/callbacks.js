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

console.log('Iniciando...');
hola('Felipe', function () {
  // console.log('Process...');
  // adios('Felipe', function () {
  //   console.log('Finalizando...');
  // });
});
adios('Felipe', function () {
});