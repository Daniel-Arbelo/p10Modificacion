class nDimensionalPoint {
    constructor(x, y, z, ...restoCoordenadas) {
        this.restoCoordenadas = [];
        this.x = x;
        this.y = y;
        this.z = z;
        this.numeroDeCoordenadas = 0;
        for (let i = 0; i < restoCoordenadas.length; i++) {
            this.restoCoordenadas.push(restoCoordenadas[i]);
        }
        this.numeroDeCoordenadas = restoCoordenadas.length + 3;
    }
    sumadePuntos(punto) {
        if (this.numeroDeCoordenadas != punto.numeroDeCoordenadas) {
            console.log("No se puede hacer operaciones con dimenciones diferentes");
        }
        else {
            this.x += punto.x;
            this.y += punto.y;
            this.z += punto.z;
            for (let i = 0; i < this.restoCoordenadas.length; i++) {
                this.restoCoordenadas[i] += punto.restoCoordenadas[i];
            }
        }
    }
    prod(numero) {
        this.x = this.x * numero;
        this.y += this.y * numero;
        this.z += this.z * numero;
        for (let i = 0; i < this.restoCoordenadas.length; i++) {
            this.restoCoordenadas[i] *= numero;
        }
    }
    distanciaEuclidea(punto) {
        if (this.numeroDeCoordenadas != punto.numeroDeCoordenadas) {
            console.log("No se puede hacer operaciones con dimenciones diferentes");
        }
        else {
            let sol = Math.pow(this.x - punto.x, 2) + Math.pow(this.y - punto.y, 2) + Math.pow(this.z - punto.z, 2);
            for (let i = 0; i < this.restoCoordenadas.length; i++) {
                sol += Math.pow(this.restoCoordenadas[i] - punto.restoCoordenadas[i], 2);
            }
            return Math.sqrt(sol);
        }
    }
}
let p = new nDimensionalPoint(2, 3, 8, 9);
let p2 = new nDimensionalPoint(6, 4, 9, 10);
console.log(p.distanciaEuclidea(p2));
p.sumadePuntos(p2);
console.log(p);
p.prod(2);
console.log(p);
