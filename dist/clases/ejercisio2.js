"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require('chalk');
const child_process_1 = require("child_process");
if (process.argv.length < 4 || process.argv.length > 6) {
    console.log("Numero de argumentos incorrecto");
}
else {
    const filename = process.argv[2];
    const wc = child_process_1.spawn('wc', [filename]);
    let wcOutput = '';
    wc.stdout.on('data', (piece) => wcOutput += piece);
    if (process.argv.length === 4) {
        if (process.argv[3] === "lineas") {
            wc.on('close', () => {
                const wcOutputAsArray = wcOutput.split(/\s+/);
                console.log('Archivo ' + filename + ' tiene ' + wcOutputAsArray[1] + ' líneas sin contar la primera linea');
            });
        }
        if (process.argv[3] === "palabras") {
            wc.on('close', () => {
                const wcOutputAsArray = wcOutput.split(/\s+/);
                console.log('Archivo ' + filename + ' tiene ' + wcOutputAsArray[2] + ' palabras.');
            });
        }
        if (process.argv[3] === "caracteres") {
            wc.on('close', () => {
                const wcOutputAsArray = wcOutput.split(/\s+/);
                console.log('Archivo ' + filename + ' tiene ' + wcOutputAsArray[3] + ' caracteres.');
            });
        }
    }
    if (process.argv.length === 5) {
        if (process.argv[3] === "lineas" || process.argv[4] === "lineas") {
            wc.on('close', () => {
                const wcOutputAsArray = wcOutput.split(/\s+/);
                console.log('Archivo ' + filename + ' tiene ' + wcOutputAsArray[1] + ' líneas sin contar la primera linea');
            });
        }
        if (process.argv[3] === "palabras" || process.argv[4] === "palabras") {
            wc.on('close', () => {
                const wcOutputAsArray = wcOutput.split(/\s+/);
                console.log('Archivo ' + filename + ' tiene ' + wcOutputAsArray[2] + ' palabras.');
            });
        }
        if (process.argv[3] === "caracteres" || process.argv[4] === "caracteres") {
            wc.on('close', () => {
                const wcOutputAsArray = wcOutput.split(/\s+/);
                console.log('Archivo ' + filename + ' tiene ' + wcOutputAsArray[3] + ' caracteres.');
            });
        }
    }
    if (process.argv.length === 6) {
        if (process.argv[3] === "lineas" || process.argv[4] === "lineas" || process.argv[5] === "lineas") {
            wc.on('close', () => {
                const wcOutputAsArray = wcOutput.split(/\s+/);
                console.log('Archivo ' + filename + ' tiene ' + wcOutputAsArray[1] + ' líneas sin contar la primera linea');
            });
        }
        if (process.argv[3] === "palabras" || process.argv[4] === "palabras" || process.argv[5] === "palabras") {
            wc.on('close', () => {
                const wcOutputAsArray = wcOutput.split(/\s+/);
                console.log('Archivo ' + filename + ' tiene ' + wcOutputAsArray[2] + ' palabras.');
            });
        }
        if (process.argv[3] === "caracteres" || process.argv[4] === "caracteres" || process.argv[5] === "caracteres") {
            wc.on('close', () => {
                const wcOutputAsArray = wcOutput.split(/\s+/);
                console.log('Archivo ' + filename + ' tiene ' + wcOutputAsArray[3] + ' caracteres.');
            });
        }
    }
    //si se quiere utilizar el pipe en el programa se hace:
    //const cat = spawn('cat', ['-n', filename]);
    //cat.stdout.pipe(process.stdout);
}
