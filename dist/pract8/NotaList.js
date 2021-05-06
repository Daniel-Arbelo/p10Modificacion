"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotaList = void 0;
const chalk = require('chalk');
class NotaList {
    constructor(notas, nombreUsuario) {
        this.notas = notas;
        this.nombreUsuario = nombreUsuario;
        this.NotasMap = new Map();
        for (let i = 0; i < notas.length; i++) {
            this.NotasMap.set(notas[i].titulo, notas[i]);
        }
    }
    nuevaNota(nota) {
        if (this.getNotaByTitulo(nota.titulo) === undefined) {
            this.NotasMap.set(nota.titulo, nota);
            console.log(chalk.green("Nuevo mensaje añadido!!"));
            return '{"body": "Nueva nota añadida!!", "color": "green"}';
        }
        else {
            console.log(chalk.red("Titulo de nota cogido!!"));
            return '{"body": "Titulo de nota cogido!!", "color": "red"}';
        }
    }
    getNotaByTitulo(titulo) {
        return this.NotasMap.get(titulo);
    }
    printNotaByTitulo(titulo) {
        let notaAimprimir = this.getNotaByTitulo(titulo);
        if (notaAimprimir === undefined) {
            console.log(chalk.red("Not note found"));
        }
        else {
        }
        return notaAimprimir;
    }
    printListaNotas() {
        let notas = [];
        console.log(chalk.green("Tus notas:"));
        this.NotasMap.forEach(nota => {
            notas.push(nota);
        });
        return notas;
    }
    notaAEliminar(titulo) {
        if (this.getNotaByTitulo(titulo) === undefined) {
            console.log(chalk.red("Mensaje no encontrada"));
        }
        else {
            this.NotasMap.delete(titulo);
            console.log(chalk.green("Mensaje eliminada!"));
        }
    }
}
exports.NotaList = NotaList;
