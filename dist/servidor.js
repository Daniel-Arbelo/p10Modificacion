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
        console.log(message);
        if (message.type === "mensaje") {
            if (!lista.buscarLista(message.user)) {
                lista.nuevaLista(new jsonNotaList_1.jsonNotaList([], message.user));
            }
            let listaUsuario = lista.getListaDeUsuario(message.user);
            if (listaUsuario !== undefined) {
                conection.write(listaUsuario.nuevaNota(new Nota_1.Nota(message.title, message.body)));
            }
        }
    });
    conection.on('close', () => {
        console.log('A client has disconnected.');
    });
}).listen(60300, () => {
    console.log('Esperando por cliente a conectarse');
});
