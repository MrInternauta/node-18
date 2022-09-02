// let func = function Hola() {
//     console.log("Hola mundo con callbacks");
// }
// setTimeout(func, 2000);
// let FUNC2 = () => console.log("Hola");

// setTimeout(FUNC2, 1000)


// let names = (callback) => {
//     callback(function(callback2) {
//         callback2(function name(callback3) {
//             callback3(function name(callback4) {
//                 callback4()
//             })
//         });
//     });
// }
// names(function name() {
//     console.log("Hola mundo");
// })
const Suma = (a, b) => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(a + b)
        }, 2000)
    })
}

// Suma(1,2).then((result) => console.log(result))
Suma(2, 2).then((result) => {
    Suma(result, 2).then((result) => {
        Suma(result, 2).then((result) => {
            Suma(result, 2).then((result) => {
                Suma(result, 2).then((result) => {
                    Suma(result, 2).then((result) => {
                        console.log(result);
                    })
                })
            })
        })
    })
})