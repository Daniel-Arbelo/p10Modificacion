export class Temperatura {
    constructor(unidad) {
        this.unidad = unidad;
    }
    help() {
        console.log("Cree un objeto con la temperatura en radianes y con la función convertir se le devolverá en grados");
    }
    convertir() {
        return this.unidad * 57.2958;
    }
}
