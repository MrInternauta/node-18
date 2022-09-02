//Class es modelo  //Nombradas
class Persona {
    //Constructor
    constructor(id, nombre) {
        //propiedades
        this.id = id;
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola soy ${this.nombre} con id ${this.id}`);
    }
}
// Anonima
let Persona2 = class {
    //Constructor
    constructor(id, nombre) {
        //propiedades
        this.id = id;
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola soy ${this.nombre} con id ${this.id}`);
    }
};
//Instancia de classe anonima
var Personita = new Persona2(1, 'Felipe');
Personita.hola;
console.log(Personita);

//Instancia
let persona = new Persona(1, 'Jose');
let persona2 = new Persona(2, 'Jose2');
let persona3 = new Persona(3, 'Jose3');
// persona.saludar();
// persona2.saludar();
// persona3.saludar();