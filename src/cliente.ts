
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
yargs.command({
    command: 'mensaje',
    describe: 'enviar mensaje',
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
    },
    handler(argv) {
        if(typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.body === 'string') {
            let enviar = '{"user" : "' + argv.user + '", "type" : "mensaje", "title": "' + argv.title + '", "body": "' + argv.body + '"}';
            
            client.write(enviar);
            
        }
    },
});


yargs.parse();
