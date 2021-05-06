export class Velocidad {
    constructor(unidad) {
        this.unidad = unidad;
    }
    help() {
        console.log("Cree un objeto con la velocidad en millas por hora y con la función convertir se le devolverá en Km/h");
    }
    convertir() {
        return this.unidad * 1.60934;
    }
}
