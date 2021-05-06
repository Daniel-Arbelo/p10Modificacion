export class Tiempo {
    constructor(unidad) {
        this.unidad = unidad;
    }
    help() {
        console.log("Cree un objeto con un tiempo en horas y con la función convertir se le devolverá en segundos");
    }
    convertir() {
        return this.unidad * 3600;
    }
}
