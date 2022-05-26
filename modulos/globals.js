let esta = this;
console.log(globalThis, global == globalThis);

setTimeout(function () {
  console.log('Hola2');
}, 0);

setImmediate(function () {
  console.log('Hola');
});
//Variable global
global.mivariable = 'Felipe';
console.log(global.mivariable);
