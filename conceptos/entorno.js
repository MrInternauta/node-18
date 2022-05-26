let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'Sin Web';

console.log(`Hola ${nombre}!`);
console.log(`Web: ${web}!`);