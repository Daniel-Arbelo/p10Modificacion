"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
class Menu {
    constructor(platos, nombreMenu) {
        this.platos = platos;
        this.nombreMenu = nombreMenu;
    }
    get_precio() {
        let precioTotal = 0;
        this.platos.forEach((plato) => {
            precioTotal += plato.get_precio();
        });
        return precioTotal;
    }
    get_platos() {
        this.platos.forEach((plato) => {
            console.log("       El plato " + plato.nombre + " es un " + plato.tipo + " está compuesto de los siguientes ingredientes:");
            plato.get_lista_ingredientes();
        });
    }
    get_kcal() {
        let kcalTotal = 0;
        this.platos.forEach((plato) => {
            kcalTotal += plato.get_kcal();
        });
        return kcalTotal;
    }
    get_proteinas() {
        let proteinasTotal = 0;
        this.platos.forEach((plato) => {
            proteinasTotal += plato.get_proteinas();
        });
        return proteinasTotal;
    }
    get_lipidos() {
        let lipidosTotal = 0;
        this.platos.forEach((plato) => {
            lipidosTotal += plato.get_lipidos();
        });
        return lipidosTotal;
    }
    get_hidratos() {
        let hidratosTotal = 0;
        this.platos.forEach((plato) => {
            hidratosTotal += plato.get_hidratos();
        });
        return hidratosTotal;
    }
}
exports.Menu = Menu;
