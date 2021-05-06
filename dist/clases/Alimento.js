"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alimento = void 0;
class Alimento {
    constructor(nombre, localizacion, tipo, kcal, proteinas, lipidos, hidratos, precioKg, cantidadKg, eliminarAliento = false) {
        this.nombre = nombre;
        this.localizacion = localizacion;
        this.tipo = tipo;
        this.kcal = kcal;
        this.proteinas = proteinas;
        this.lipidos = lipidos;
        this.hidratos = hidratos;
        this.precioKg = precioKg;
        this.cantidadKg = cantidadKg;
        this.eliminarAliento = eliminarAliento;
    }
    get_precio() {
        return this.precioKg * this.cantidadKg;
    }
    get_kcal() {
        return (this.kcal * (this.cantidadKg * 1000)) / 100;
    }
    get_proteinas() {
        return (this.proteinas * (this.cantidadKg * 1000)) / 100;
    }
    get_lipidos() {
        return (this.lipidos * (this.cantidadKg * 1000)) / 100;
    }
    get_hidratos() {
        return (this.hidratos * (this.cantidadKg * 1000)) / 100;
    }
}
exports.Alimento = Alimento;
