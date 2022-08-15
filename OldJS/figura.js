class Figura {
    constructor(nombre) {
            this.nombre = nombre;
        }
        //Poligono
    calcularArea(base, altura) {
            return base * altura
        }
        //Triangulo
    calcularArea(base, altura, divisor) {
        return (base * altura) / divisor;
    }
}
let mifigura = new Figura('Cuadro');
console.log(mifigura.calcularArea(5, 5));
let rec = new Figura('Rectangulo');
console.log(rec.calcularArea(5, 10));
let triangulo = new Figura('Triangulo');
let area = triangulo.calcularArea(5, 3, 2);
console.log('Area del triangulo ' + area);