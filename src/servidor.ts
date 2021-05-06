import * as net from 'net';
import {Nota} from "./pract8/Nota";
import {jsonNotaList} from "./pract8/jsonNotaList";
import {ListaDeListas} from "./pract8/ListaDeListas";

import { title } from 'process';
import { brotliDecompressSync } from 'zlib';
const chalk = require('chalk');


let lista:ListaDeListas = new ListaDeListas();

net.createServer((conection) => {
    console.log('Un cliente se ha conectado');

    conection.on('data', (data) => {
        const message = JSON.parse(data.toString());
        console.log(message);
        if(message.type === "mensaje"){ 
            if(!lista.buscarLista(message.user)){
                lista.nuevaLista(new jsonNotaList([], message.user));
            }
            let listaUsuario: jsonNotaList|undefined = lista.getListaDeUsuario(message.user);
            if(listaUsuario !== undefined) {
                conection.write(listaUsuario.nuevaNota(new Nota(message.title, message.body)));
            }
        }

    })

    conection.on('close', () =>{
        console.log('A client has disconnected.');
    })
}).listen(60300, () => {
    console.log('Esperando por cliente a conectarse');
});



