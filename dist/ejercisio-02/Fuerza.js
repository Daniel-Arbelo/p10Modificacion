export class Fuerza {
    constructor(unidad) {
        this.unidad = unidad;
    }
    help() {
        console.log("Cree un objeto con la fuerza en kilovatios y con la función convertir se le devolverá en kilojulios");
    }
    convertir() {
        return this.unidad * 3600;
    }
}
