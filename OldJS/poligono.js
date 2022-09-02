class Poligono {
    constructor(altura, anchura) {
        this.altura = altura;
        this.anchura = anchura;
    }
    CalcularArea() {
            return this.altura * this.anchura;
        }
        //GETTER
    get Area() {
        return this.CalcularArea();
    }

}
//instancia 
let POLIGONO = new Poligono(2, 3);
console.log(POLIGONO.Area);