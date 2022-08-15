class Persona {

    constructor(Identificador, nombre) {
        this.id = Identificador;
        this.nombre = nombre;
    }
    saludar() {
        console.log("Hola mundo con POO");
        console.log(this.id, this.nombre);
    }
}

let persona = new Persona(1, 'Jose');
let persona2 = new Persona(2, 'Juan');
console.log(persona.id, persona2.id);

persona.saludar();