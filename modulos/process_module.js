//import process from 'process';
/*
El objecto process es una instancia de EventEmitter; podemos suscribirnos a el para escuchar eventos de node.

*/
process.on('beforeExit', function () {
  console.info('The process will close');
})

//exit: Se ejecuta cuando node detiene el eventloop y cierra su proceso principal.
process.on('exit', function () {
  //Is desconected form the event loop
  setTimeout(() => {
    console.log('No show it');
  }, 0);
  console.info('Close process');
})

//Handle errors
const unhandledRejections = new Map();

/*
UncaughtException: Permite capturar cualquier error que no fue caputurado previamente. Esto evita que Node cierre todos los hijos al encontrar un error no manejado.
*/
//In synchronous code, the 'uncaughtException' event is emitted when the list of unhandled exceptions grows.
process.on('uncaughtException', function (error, origen) {
  //Is NOT desconected form the event loop
  setTimeout(() => {
    console.log('Show it');
  }, 0);
  console.log('No handle error =>', { error, origen });
})

/*
In asynchronous code, the 'unhandledRejection' event is emitted when the list of unhandled rejections grows, and the 'rejectionHandled' event is emitted when the list of unhandled rejections shrinks.
*/
process.on('unhandledRejection', function (reason, promise) {
  //Is NOT desconected form the event loop
  setTimeout(() => {
    console.log('Show it 2');
  }, 0);
  console.log('No handle rejection =>', { promise });
  unhandledRejections.set(promise, reason);

})


// the 'rejectionHandled' event is emitted when the list of unhandled rejections shrinks.
process.on('rejectionHandled', (promise) => {
  console.log('Hadled rejecttion', { promise });
  unhandledRejections.delete(promise);
});

//------uncaughtException
//throw new Error('My Error')
//noexiste();
// console.log('No show because by the error');

//------unhandledRejection
var somevar = false;
var PTest = function () {
  return new Promise(function (resolve, reject) {
    if (somevar === true)
      resolve();
    else
      reject();
  });
}
/* Creating a promise and assigning it to the variable `myfunc`. */
var myfunc = PTest();
myfunc.then(function () {
  console.log("Promise Resolved");
})
  .catch(function () {
    console.log("Promise Rejected");
  });

var myfunc2 = PTest();
myfunc2.then(function () {
  console.log("Promise Resolved");
})




