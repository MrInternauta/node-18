const Suma = (a, b) => new Promise((resolve, reject) => setTimeout(() => resolve(a + b), 1000))


// Suma(2, 2).then((result) => {
//     Suma(result, 2).then((result) => {
//         Suma(result, 2).then((result) => {
//             Suma(result, 2).then((result) => {
//                 Suma(result, 2).then((result) => {
//                     Suma(result, 2).then((result) => {
//                         console.log(result);
//                     })
//                 })
//             })
//         })
//     })
// })
const SumaTotal = async() => {
    let valo = await Suma(2, 2)
    valo = await Suma(valo, 2)
    valo = await Suma(valo, 2)
    valo = await Suma(valo, 2)
    valo = await Suma(valo, 2)
    valo = await Suma(valo, 2)
    return valo;
}
SumaTotal().then((res) => {
    console.log(res);
})