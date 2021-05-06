class Electrodomestico {
    constructor(peso = 150, precio, color, consumo) {
        this.peso = peso;
        this.precio = precio;
        this.color = color;
        this.consumo = consumo;
        if (peso < 0 || peso > 200) {
            throw ("El peso del elctrodomético no está en el rango");
        }
    }
    print() {
    }
}
class Lavadora extends Electrodomestico {
    constructor(peso = 150, precio, color, consumo, carga = 5) {
        super(peso, precio, color, consumo);
        this.peso = peso;
        this.precio = precio;
        this.color = color;
        this.consumo = consumo;
        this.carga = carga;
        if (this.peso > 100) {
            this.precio += 80;
        }
    }
    print() {
        console.log("Lavadora de " + this.peso + " peso con un precio de " + this.precio + "€");
    }
}
class Televisor extends Electrodomestico {
    constructor(peso = 150, precio, color, consumo, resolucion = 20, smarTv) {
        super(peso, precio, color, consumo);
        this.peso = peso;
        this.precio = precio;
        this.color = color;
        this.consumo = consumo;
        this.resolucion = resolucion;
        this.smarTv = smarTv;
        if (this.smarTv) {
            this.precio += 50;
        }
    }
    print() {
        console.log("Televisor de " + this.resolucion + " pulgadas con un precio de " + this.precio + "€");
    }
}
let colecionDeLavadoras = [new Lavadora(100, 500, "blanco", "A", 10), new Lavadora(undefined, 150, "blanco", "A", 10),
    new Lavadora(170, 200, "gris", "F", 15)];
let collectionDeTelevisores = [new Televisor(35, 800, "negro", "C", 50, true), new Televisor(45, 1200, "blanco", "F", 60, true), new Televisor(7, 70, "negro", "B", undefined, false),
    new Televisor(80, 5000, "negro", "F", 90, true)];
console.log("Lavadoras:");
colecionDeLavadoras.forEach((lavadora) => {
    lavadora.print();
});
console.log("Lavadoras ordenadas por precios de menor a mayor:");
colecionDeLavadoras.sort(((a, b) => a.precio - b.precio));
colecionDeLavadoras.forEach((lavadora) => {
    lavadora.print();
});
console.log("Televisores:");
collectionDeTelevisores.forEach((televisor) => {
    televisor.print();
});
