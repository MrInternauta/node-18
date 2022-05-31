/*
Los Error First Callbacks se utilizan para pasar primero el error y los datos posteriormente. Entonces, puedes verificar el primer argumento, es decir, el objeto de error para ver si algo salió mal y puedes manejarlo. En caso de que no haya ningún error, puedes utilizar los argumentos posteriores y seguir adelante.


*/

function asincrona(callback) {
  setTimeout(() => {
    try {
      let sum = 1 + Z;
      callback(null, sum);
    } catch (error) {
      callback(error)
    }
  }, 1000);

}

asincrona(function (error, res) {
  if (error) {
    console.log('Existe un error', error)
    return
  }
  console.log('Resultado');
})