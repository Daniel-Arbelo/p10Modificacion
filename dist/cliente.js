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
/*const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv; */
const yargs = __importStar(require("yargs"));
const chalk = require('chalk');
const ListaDeListas_1 = require("./pract8/ListaDeListas");
const client = net.connect({ port: 60300 });
let lista = new ListaDeListas_1.ListaDeListas();
//add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        user: {
            describe: 'Note user',
            demandOption: true,
            type: 'string',
        },
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        },
        color: {
            describe: 'Note color',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.body === 'string' && typeof argv.color === 'string') {
            let enviar = '{"user" : "' + argv.user + '", "type" : "add", "title": "' + argv.title + '", "body": "' + argv.body + '", "color": "' + argv.color + '"}';
            client.write(enviar);
        }
    },
});
//list
yargs.command({
    command: 'list',
    describe: 'List your notes',
    builder: {
        user: {
            describe: 'Note user',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.user === 'string') {
            let enviar = '{"user" : "' + argv.user + '", "type" : "list"}';
            client.write(enviar);
        }
    },
});
//read
yargs.command({
    command: 'read',
    describe: 'lee una nota',
    builder: {
        user: {
            describe: 'Note user',
            demandOption: true,
            type: 'string',
        },
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.user === 'string' && typeof argv.title === 'string') {
            let enviar = '{"user" : "' + argv.user + '", "type" : "read", "title": "' + argv.title + '"}';
            client.write(enviar);
        }
    },
});
//remove
yargs.command({
    command: 'remove',
    describe: 'elimina una nota',
    builder: {
        user: {
            describe: 'Note user',
            demandOption: true,
            type: 'string',
        },
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.user === 'string' && typeof argv.title === 'string') {
            let enviar = '{"user" : "' + argv.user + '", "type" : "remove", "title": "' + argv.title + '"}';
            client.write(enviar);
        }
    },
});
yargs.parse();
client.on('data', (data) => {
    const message = JSON.parse(data.toString());
    if (message.type) {
        if (message.type == "list") {
            if (message.success == true) {
                console.log(chalk.green("Tus notas:"));
                let notas = message.notes;
                for (let i = 0; i < notas.length; i++) {
                    console.log(chalk.keyword(notas[i].color)(notas[i].titulo));
                }
            }
            else {
                console.log(chalk.red("Lista no encontrada"));
            }
        }
        else if (message.type == "read") {
            if (message.success == true) {
                let notas = message.notes;
                console.log(chalk.keyword(notas[0].color)(notas[0].titulo));
                console.log(chalk.keyword(notas[0].color)(notas[0].cuerpo));
            }
            else {
                console.log(chalk.red("Lista no encontrada"));
            }
        }
    }
    else {
        console.log(chalk.keyword(message.color)(message.body));
    }
});
