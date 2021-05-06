"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
if (process.argv.length !== 3) {
    console.log('Please, specify a file');
}
else {
    const dir = process.argv[2];
    const watcher = fs_1.watch(dir, (eventType, filename) => {
        watcher.on('change', () => {
            console.log('File ' + filename + ' has been modified somehow');
        });
        if (eventType === 'rename') {
            console.log('Creado un archivo ' + filename);
        }
    });
}
// si el EventEmitter es un rename, es que se ha creado un fichero nuevo, si es change, es que se ha modificado un fichero existente.
// node dist/index.js /home/usuario/pract08
