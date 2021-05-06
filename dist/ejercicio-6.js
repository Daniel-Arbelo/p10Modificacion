class biDimensionalPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    sumadePuntos(punto) {
        this.x += punto.x;
        this.y += punto.y;
    }
    prod(numero) {
        this.x = this.x * numero;
        this.y += this.y * numero;
    }
    distanciaEuclidea(punto) {
        return Math.sqrt(Math.pow(this.x - punto.x, 2) + Math.pow(this.y - punto.y, 2));
    }
}
let punto = new biDimensionalPoint(2, 3);
let punto2 = new biDimensionalPoint(6, 4);
console.log(punto.distanciaEuclidea(punto2));
punto.sumadePuntos(punto2);
console.log(punto);
punto.prod(2);
console.log(punto);
