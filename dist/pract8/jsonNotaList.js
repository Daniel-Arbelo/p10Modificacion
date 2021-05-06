"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonNotaList = void 0;
const Nota_1 = require("./Nota");
const NotaList_1 = require("./NotaList");
const lowdb_1 = __importDefault(require("lowdb"));
const FileSync_1 = __importDefault(require("lowdb/adapters/FileSync"));
class jsonNotaList extends NotaList_1.NotaList {
    constructor(notas = [], nombreUsuario) {
        super(notas, nombreUsuario);
        this.nombreUsuario = nombreUsuario;
        this.database = lowdb_1.default(new FileSync_1.default(nombreUsuario + ".json"));
        if (this.database.has('notas').value()) {
            let dbItems = this.database.get('notas').value();
            dbItems.forEach(item => {
                this.NotasMap.set(item.titulo, new Nota_1.Nota(item.titulo, item.cuerpo, item.color));
            });
        }
        else {
            this.database.set('notas', notas).write();
            notas.forEach(item => {
                this.NotasMap.set(item.titulo, item);
            });
        }
    }
    empty() {
        if (this.NotasMap.size === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    storeNota() {
        this.database.set('notas', [...this.NotasMap.values()]).write();
    }
    nuevaNota(nota) {
        let retornar = super.nuevaNota(nota);
        this.storeNota();
        return retornar;
    }
    notaAEliminar(titulo) {
        super.notaAEliminar(titulo);
        this.storeNota();
    }
}
exports.jsonNotaList = jsonNotaList;
