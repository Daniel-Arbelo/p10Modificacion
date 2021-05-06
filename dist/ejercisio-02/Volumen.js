export class Volumen {
    constructor(unidad) {
        this.unidad = unidad;
    }
    help() {
        console.log("Cree un objeto con la fuerza en litros y con la función convertir se le devolverá en mililitros");
    }
    convertir() {
        return this.unidad * 1000;
    }
}
