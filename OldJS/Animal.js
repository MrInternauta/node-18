//Padre
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hacerRuido() {
        console.log(this.nombre + ' Hace ruido');
    }
}

//Hijo
class Perro extends Animal {
    hacerRuido() {
        console.log(this.nombre + ' ladra.');
    }
    caminar() {
        console.log(this.nombre + " esta caminando...");
    }
}
//Nieto
class Chihuahua extends Perro {
    constructor(nombre, tamano) {
        super();
        /*
            En un constructor de clase hijo, thisno se puede utilizar hasta que superse llame.
            Los constructores de clase ES6 DEBEN llamar supersi son subclases, o deben devolver explícitamente algún objeto para reemplazar al que no se inicializó. */
        this.nombre = nombre;
        this.tamano = tamano;
    }
}
//Instancia
let animal = new Chihuahua('Doggito', 30);
console.log(animal.tamano);