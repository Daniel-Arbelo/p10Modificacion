export class Longitud {
    constructor(unidad) {
        this.unidad = unidad;
    }
    help() {
        console.log("Cree un objeto con la longitud en piés y con la función convertir se le devolverá en metros");
    }
    convertir() {
        return this.unidad * 0.3048;
    }
}
