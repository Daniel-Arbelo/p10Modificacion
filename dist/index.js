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
const chalk = require('chalk');
const fs = __importStar(require("fs"));
if (process.argv.length !== 4) {
    console.log('Please, specify a file');
}
else {
    if (process.argv[2] === 'mkdir') {
        fs.mkdir(process.argv[3], (err) => {
            if (err) {
                console.log("Fallo al crear el directorio");
            }
            else {
                console.log("Directorio Creado");
            }
        });
    }
    else if (process.argv[2] === 'rmdir') {
        fs.rmdir(process.argv[3], (err) => {
            if (err) {
                console.log("Fallo al eliminar el directorio");
            }
            else {
                console.log("Directorio Eliminado");
            }
        });
    }
    else if (process.argv[2] === 'ls') {
        fs.readdir(process.argv[3], (err, archivos) => {
            if (err) {
                console.log("Fallo al leer el contenido del directorio");
            }
            else {
                console.log(archivos);
            }
        });
    }
    else if (process.argv[2] === 'dirofichero') {
        fs.lstat(process.argv[3], (err, stats) => {
            if (err) {
                console.log("Ruta incorrecta");
            }
            if (stats.isDirectory()) {
                console.log("Es un directorio");
            }
            else {
                console.log("Es un fichero");
            }
        });
    }
}
