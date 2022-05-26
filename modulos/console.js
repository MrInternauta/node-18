console.log('Log') //recibe cualquier tipo y lo muestra en el consola.
console.info('Info') //es equivalente a log pero es usado para informar.
console.error('Error') //es equivalente a log pero es usado para errores.
console.warn('Warning')//es equivalente a log pero es usado para warning.
console.table({ nombre: 'Felipe', edad: 22 }) //muestra una tabla a partir de un objeto.
console.group('Count') //permite agrupar errores mediante identación.
console.count('Holaa') //inicia un contador autoincremental.
console.count('Holaa') //inicia un contador autoincremental.
console.count('Holaa') //inicia un contador autoincremental.
console.countReset('Holaa') //reinicia el contador a 0.
console.groupEnd() //finaliza la agrupación.

console.group('Time') //permite agrupar errores mediante identación.
console.time() //inicia un cronometro en ms.
console.timeEnd() //Finaliza el cronometro.
console.groupEnd() //finaliza la agrupación.

console.group() //permite agrupar errores mediante identación.
console.log('Hola');
console.group() //permite agrupar errores mediante identación.
console.log('Hola');
console.log('Hola2');
console.groupEnd() //finaliza la agrupación.
console.log('Hola2');
console.groupEnd() //finaliza la agrupación.
//console.clear() //Limpia la consola.