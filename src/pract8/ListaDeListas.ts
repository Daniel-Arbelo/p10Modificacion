import { Nota } from './Nota';

import {jsonNotaList} from './jsonNotaList';

export class ListaDeListas{
    ListasMap = new Map<string, jsonNotaList>();

    constructor(){

    }

    buscarLista(nombre:string): boolean {
        
        if(this.getListaDeUsuario(nombre) === undefined) {
            return false;
        }
        else{
           return true;
        }
    }
    
    nuevaLista(lista: jsonNotaList):boolean {
        if(this.getListaDeUsuario(lista.nombreUsuario) === undefined) {
            this.ListasMap.set(lista.nombreUsuario, lista);
            return true;
        }
        else{
           return false;
        }
    }

    getListaDeUsuario(nombre:string): jsonNotaList | undefined{
        return this.ListasMap.get(nombre);
    }
}