let persona = {
    id: 1,
    nombre: 'Jose',
    saludar: () => {
        let nombre = persona.nombre;
        let id = persona.id;
        let text = nombre + ' ESTA SALUDANDO (' + id + ')'
        console.log(text)
    }
};
let persona2 = {
    id: 2,
    nombre: 'Citlalli',
    saludar: () => {
        let nombre = persona2.nombre;
        let id = persona2.id;
        let text = nombre + ' ESTA SALUDANDO (' + id + ')'
        console.log(text)
    }
};
let persona3 = {
    id: 3,
    nombre: 'Citlalli',
    saludar: () => {
        let nombre = persona3.nombre;
        let id = persona3.id;
        let text = nombre + ' ESTA SALUDANDO (' + id + ')'
        console.log(text)
    }
};



persona2.saludar()