"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaDeListas = void 0;
class ListaDeListas {
    constructor() {
        this.ListasMap = new Map();
    }
    buscarLista(nombre) {
        if (this.getListaDeUsuario(nombre) === undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    nuevaLista(lista) {
        if (this.getListaDeUsuario(lista.nombreUsuario) === undefined) {
            this.ListasMap.set(lista.nombreUsuario, lista);
            return true;
        }
        else {
            return false;
        }
    }
    getListaDeUsuario(nombre) {
        return this.ListasMap.get(nombre);
    }
}
exports.ListaDeListas = ListaDeListas;
