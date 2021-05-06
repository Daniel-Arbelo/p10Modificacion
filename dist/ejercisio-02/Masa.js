export class Masa {
    constructor(unidad) {
        this.unidad = unidad;
    }
    help() {
        console.log("Cree un objeto con el peso en libras y con la función convertir se le devolverá en kilogramos");
    }
    convertir() {
        return this.unidad * 0.453592;
    }
}
