"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comanda = void 0;
class Comanda {
    constructor(menus, platos) {
        this.menus = menus;
        this.platos = platos;
        this.PlatosMap = new Map();
        this.MenusMap = new Map();
        for (let i = 0; i < platos.length; i++) {
            this.PlatosMap.set(platos[i].nombre, platos[i]);
        }
        for (let i = 0; i < menus.length; i++) {
            this.MenusMap.set(menus[i].nombreMenu, menus[i]);
        }
    }
    nuevoPlato(plato) {
        this.PlatosMap.set(plato.nombre, plato);
    }
    nuevoMenu(menu) {
        this.MenusMap.set(menu.nombreMenu, menu);
    }
    verPedido() {
        if (this.PlatosMap.size > 0) {
            console.log("Los platos que ha pedido son los siguientes:");
            this.PlatosMap.forEach(plato => {
                console.log("El plato " + plato.nombre + " con los siguientes ingredientes:");
                plato.get_lista_ingredientes();
            });
        }
        if (this.MenusMap.size > 0) {
            console.log("Ha pedido los siguientes menus:");
            this.MenusMap.forEach(menu => {
                console.log("El menu " + menu.nombreMenu + " con los siguientes platos:");
                menu.get_platos();
            });
        }
    }
    platoAEliminar(nombre) {
        this.PlatosMap.forEach(plato => {
            if (plato.nombre === nombre) {
                this.PlatosMap.delete(plato.nombre);
            }
        });
    }
    menuAEliminar(nombre) {
        this.MenusMap.forEach(menu => {
            if (menu.nombreMenu === nombre) {
                this.MenusMap.delete(menu.nombreMenu);
            }
        });
    }
    buscarPlato(nombre) {
        return this.PlatosMap.get(nombre);
    }
    buscarMenu(nombre) {
        return this.MenusMap.get(nombre);
    }
}
exports.Comanda = Comanda;
