const promesa = new Promise(function(resolve, reject) {

    setTimeout(() => resolve(), 2000)

})

promesa.then((date) => {
    console.log("Exito");
})
promesa.catch(function(params) {
    console.log(params);
})




const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => { reject(new Error('Se ejecuto con error')) }, 3000)
})
promesa2.then((date) => {
    console.log("Ejecutado correctamente");
    console.log(data);
}).catch((e) => {
    console.log(e);
})