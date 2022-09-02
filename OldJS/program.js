//Sincrona
// console.log('Primero');
// console.log('Segundo');
// console.log('Tercero');
//Asíncrono
// console.log('Primero');
// setTimeout(() => {
//     console.log('Segundo');
// }, 1000)
// console.log('Tercero');

// const callback = () => {
//     setTimeout(() => { console.log("LLamado a un callback"); }, 1000)

// }

// function OtraFuncion(callback) {
//     console.log("Ejecutando otra funcion");
//     callback();
// }
// OtraFuncion(callback);
// console.log("hola");

// const Estaciones = [{ id: 1, name: "Station1" }, { id: 2, name: "Station2" }];

// let nombre = Estaciones.map((elemento) => {
//     return elemento.name;
// })
// console.log(nombre);

var Mypromesa = new Promise((resolve, reject) => {
    // Proceso
    if (false) {
        resolve('Exito')
    } else {
        reject('Error')
    }
})

Mypromesa.then(function(e) {
    console.log(e);
}).catch(function(error) {
    console.log(error);
})