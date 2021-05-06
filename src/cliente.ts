
import * as net from 'net';
import * as fs from 'fs';
/*const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv; */
import * as yargs from 'yargs';
const chalk = require('chalk');
//clases
import {Nota} from "./pract8/Nota";
import {jsonNotaList} from "./pract8/jsonNotaList";
import {ListaDeListas} from "./pract8/ListaDeListas";
import {RequestType} from "./types";
import {ResponseType} from "./types";
import { title } from 'process';
import { brotliDecompressSync } from 'zlib';



const client = net.connect({port:60300});


let lista:ListaDeListas = new ListaDeListas();

//add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        user: {
            describe: 'Note user',
            demandOption: true,
            type: 'string',
        },
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        },
        color:{
            describe: 'Note color',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if(typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.body === 'string' && typeof argv.color === 'string' ) {
            let enviar = '{"user" : "' + argv.user + '", "type" : "add", "title": "' + argv.title + '", "body": "' + argv.body + '", "color": "' + argv.color + '"}';
            
            client.write(enviar);
            
        }
    },
});

//list
yargs.command({
    command: 'list',
    describe: 'List your notes',
    builder:{
        user: {
            describe: 'Note user',
            demandOption: true,
            type: 'string',
        },
        
    },
    handler(argv) {
        if(typeof argv.user === 'string') {
            let enviar = '{"user" : "' + argv.user + '", "type" : "list"}';
            
            client.write(enviar);
            
        }
    },
});

//read
yargs.command({
    command: 'read',
    describe: 'lee una nota',
    builder:{
        user: {
            describe: 'Note user',
            demandOption: true,
            type: 'string',
        },
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if(typeof argv.user === 'string' && typeof argv.title === 'string') {
            let enviar = '{"user" : "' + argv.user + '", "type" : "read", "title": "' + argv.title + '"}';
            
            client.write(enviar);
        }
    },
});

//remove
yargs.command({
    command: 'remove',
    describe: 'elimina una nota',
    builder:{
        user: {
            describe: 'Note user',
            demandOption: true,
            type: 'string',
        },
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if(typeof argv.user === 'string' && typeof argv.title === 'string') {
            let enviar = '{"user" : "' + argv.user + '", "type" : "remove", "title": "' + argv.title + '"}';
            
            client.write(enviar);
            
        }
    },
});


yargs.parse();

client.on('data', (data) =>{
    const message = JSON.parse(data.toString());
    if(message.type) {
        if(message.type == "list") {
            if(message.success == true){
                console.log(chalk.green("Tus notas:"));
                let notas:Nota[] = message.notes;
                for(let i:number = 0; i< notas.length; i++){
                    console.log(chalk.keyword(notas[i].color)(notas[i].titulo));
                }
            }else{
                console.log(chalk.red("Lista no encontrada"));
            }
        }else if(message.type == "read"){
            if(message.success == true){
                let notas:Nota[] = message.notes;
                console.log(chalk.keyword(notas[0].color)(notas[0].titulo));
                console.log(chalk.keyword(notas[0].color)(notas[0].cuerpo));
            }else{
                console.log(chalk.red("Lista no encontrada"));
            }
        }

    }else{
        console.log(chalk.keyword(message.color)(message.body));
    }
});