function serompe() {
  return 3 + z;
}
function otra() {
  serompe();
}

function serompeasync(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      cb('Error en la func async')
    }
  }, 100);
}
function serompeasync2() {
  setTimeout(() => {
    return 3 + z;
  }, 100);
  return 3 + z;
}
try {
  //serompe()//Captura el error
  //otra(); //Captura el error
  //serompeasync2() //no se catcha (esta en otro hilo)

  serompeasync((err) => {
    console.log(err);
  });
} catch (error) {
  console.error(error, {

  });
  console.log('Se controla');
}
