class Point {
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
function agent(x, y, initialPoint, endPoint) {
    let numero = initialPoint.x;
    let sol = [];
    while (numero != endPoint.x) {
        if (numero < endPoint.x) {
            sol.push("Sur");
            numero++;
        }
        else if (numero > endPoint.x) {
            sol.push("Norte");
            numero--;
        }
    }
    numero = initialPoint.y;
    while (numero != endPoint.y) {
        if (numero < endPoint.y) {
            sol.push("Este");
            numero++;
        }
        else if (numero > endPoint.y) {
            sol.push("Oeste");
            numero--;
        }
    }
    return sol;
}
let p1 = new Point(1, 3);
let po2 = new Point(3, 5);
console.log(agent(8, 8, p1, po2));
