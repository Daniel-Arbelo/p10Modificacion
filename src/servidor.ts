import * as net from 'net';
import {Nota} from "./pract8/Nota";
import {jsonNotaList} from "./pract8/jsonNotaList";
import {ListaDeListas} from "./pract8/ListaDeListas";
import {RequestType} from "./types";
import {ResponseType} from "./types";
import { title } from 'process';
import { brotliDecompressSync } from 'zlib';
const chalk = require('chalk');

let lista:ListaDeListas = new ListaDeListas();

net.createServer((conection) => {
    console.log('Un cliente se ha conectado');

    conection.on('data', (data) => {
        const message = JSON.parse(data.toString());
        if(message.type === "add"){ //add
            if(!lista.buscarLista(message.user)){
                lista.nuevaLista(new jsonNotaList([], message.user));
            }
            let listaUsuario: jsonNotaList|undefined = lista.getListaDeUsuario(message.user);
            if(listaUsuario !== undefined) {
                conection.write(listaUsuario.nuevaNota(new Nota(message.title, message.body, message.color)));
            }
        }else if(message.type === "list") {//list
            let notlistDataBase = new jsonNotaList([], message.user);
            if(notlistDataBase.empty()){
                console.log(chalk.red("Lista no encontrada"));
                let respuesta:ResponseType = {'type': 'list', 'success': false};
                conection.write(JSON.stringify(respuesta));
            }
            else {
                let notas:Nota[] = notlistDataBase.printListaNotas();
                let respuesta:ResponseType = {'type': 'list', 'success': true, 'notes': notas}; 
                conection.write(JSON.stringify(respuesta) + '\n');
            }
        }else if(message.type === "read") {
            let notlistDataBase = new jsonNotaList([], message.user);
            if(notlistDataBase.empty()){
                console.log(chalk.red("Lista no encontrada"));
                let respuesta:ResponseType = {'type': 'read', 'success': false};
                conection.write(JSON.stringify(respuesta));
            }
            else {
                let nota:Nota|undefined = notlistDataBase.printNotaByTitulo(message.title);
                if(nota === undefined) {
                    conection.write('{"body": "Not note found", "color": "red"}');
                }
                else{
                    let notas:Nota[] = [];
                    notas.push(nota);
                    let respuesta:ResponseType = {'type': 'read', 'success': true, 'notes': notas}; 
                    conection.write(JSON.stringify(respuesta) + '\n');
                }

            }
        }else if(message.type === "remove") {
            let notlistDataBase = new jsonNotaList([], message.user);
            if(notlistDataBase.empty()){
                console.log(chalk.red("Lista no encontrada"));
                conection.write('{"body": "Lista no encontrada", "color": "red"}');
            }
            else {
                notlistDataBase.notaAEliminar(message.title);
                conection.write('{"body": "Nota eliminada!", "color": "green"}');
            }
        }





    })

    conection.on('close', () =>{
        console.log('A client has disconnected.');
    })
}).listen(60300, () => {
    console.log('Esperando por cliente a conectarse');
});



