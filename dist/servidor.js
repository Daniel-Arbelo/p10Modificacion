"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const net = __importStar(require("net"));
const Nota_1 = require("./pract8/Nota");
const jsonNotaList_1 = require("./pract8/jsonNotaList");
const ListaDeListas_1 = require("./pract8/ListaDeListas");
const chalk = require('chalk');
let lista = new ListaDeListas_1.ListaDeListas();
net.createServer((conection) => {
    console.log('Un cliente se ha conectado');
    conection.on('data', (data) => {
        const message = JSON.parse(data.toString());
        if (message.type === "add") { //add
            if (!lista.buscarLista(message.user)) {
                lista.nuevaLista(new jsonNotaList_1.jsonNotaList([], message.user));
            }
            let listaUsuario = lista.getListaDeUsuario(message.user);
            if (listaUsuario !== undefined) {
                conection.write(listaUsuario.nuevaNota(new Nota_1.Nota(message.title, message.body, message.color)));
            }
        }
        else if (message.type === "list") { //list
            let notlistDataBase = new jsonNotaList_1.jsonNotaList([], message.user);
            if (notlistDataBase.empty()) {
                console.log(chalk.red("Lista no encontrada"));
                let respuesta = { 'type': 'list', 'success': false };
                conection.write(JSON.stringify(respuesta));
            }
            else {
                let notas = notlistDataBase.printListaNotas();
                let respuesta = { 'type': 'list', 'success': true, 'notes': notas };
                conection.write(JSON.stringify(respuesta) + '\n');
            }
        }
        else if (message.type === "read") {
            let notlistDataBase = new jsonNotaList_1.jsonNotaList([], message.user);
            if (notlistDataBase.empty()) {
                console.log(chalk.red("Lista no encontrada"));
                let respuesta = { 'type': 'read', 'success': false };
                conection.write(JSON.stringify(respuesta));
            }
            else {
                let nota = notlistDataBase.printNotaByTitulo(message.title);
                if (nota === undefined) {
                    conection.write('{"body": "Not note found", "color": "red"}');
                }
                else {
                    let notas = [];
                    notas.push(nota);
                    let respuesta = { 'type': 'read', 'success': true, 'notes': notas };
                    conection.write(JSON.stringify(respuesta) + '\n');
                }
            }
        }
        else if (message.type === "remove") {
            let notlistDataBase = new jsonNotaList_1.jsonNotaList([], message.user);
            if (notlistDataBase.empty()) {
                console.log(chalk.red("Lista no encontrada"));
                conection.write('{"body": "Lista no encontrada", "color": "red"}');
            }
            else {
                notlistDataBase.notaAEliminar(message.title);
                conection.write('{"body": "Nota eliminada!", "color": "green"}');
            }
        }
    });
    conection.on('close', () => {
        console.log('A client has disconnected.');
    });
}).listen(60300, () => {
    console.log('Esperando por cliente a conectarse');
});
