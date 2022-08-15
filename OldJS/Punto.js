class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static CalcularDistancia(a, b) {
        let dx = a.x - b.x;
        let dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

}
let a = new Punto(3, 6);
let b = new Punto(10, 20);

//Metodo estatico
let d = Punto.CalcularDistancia(a, b);
console.log(d);