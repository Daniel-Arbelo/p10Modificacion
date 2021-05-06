"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carta = void 0;
class Carta {
    constructor(menus, platos) {
        this.menus = menus;
        this.platos = platos;
    }
    visualizar_carta() {
        console.log("Los menús disponibles son:");
        console.table(this.menus, ["nombreMenu"]);
        console.log("Los platos disponibles son:");
        console.table(this.platos, ["nombre"]);
        /*
                this.menus.forEach((menu) => {
                    console.log("El menu " + menu.nombreMenu + " está compuesto de los siguientes platos: ");
                    menu.get_platos();
                    console.log("");
                 });
        */
    }
    visualizar_Platos() {
        console.log("Los platos disponibles son:");
        console.table(this.platos, ["nombre"]);
    }
    visualizar_Menus() {
        console.log("Los menús disponibles son:");
        console.table(this.menus, ["nombreMenu"]);
    }
    buscar_plato(nombre) {
        let sol;
        this.platos.forEach(plato => {
            if (plato.nombre === nombre) {
                sol = plato;
            }
        });
        return sol;
    }
    buscar_menu(nombre) {
        let sol;
        this.menus.forEach(menu => {
            if (menu.nombreMenu === nombre) {
                sol = menu;
            }
        });
        return sol;
    }
}
exports.Carta = Carta;
