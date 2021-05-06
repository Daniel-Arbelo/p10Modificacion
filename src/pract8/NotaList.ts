import {Nota} from './Nota';
const chalk = require('chalk');

export class NotaList{

    NotasMap = new Map<string, Nota>();

    constructor(private notas:Nota[], public nombreUsuario:string){
        for(let i:number = 0; i < notas.length; i++) {
            this.NotasMap.set(notas[i].titulo, notas[i]);
        }
    }

    nuevaNota(nota: Nota):string {
        if(this.getNotaByTitulo(nota.titulo) === undefined) {
            this.NotasMap.set(nota.titulo, nota);
            console.log(chalk.green("Nueva nota añadida!!"));
            return '{"body": "Nueva nota añadida!!", "color": "green"}';
        }
        else{
            console.log(chalk.red("Titulo de nota cogido!!"));
            return '{"body": "Titulo de nota cogido!!", "color": "red"}';
        }
    }

    getNotaByTitulo(titulo:string): Nota | undefined{
        return this.NotasMap.get(titulo);
    }

    printNotaByTitulo(titulo:string):Nota|undefined {
        let notaAimprimir:Nota|undefined = this.getNotaByTitulo(titulo);
        if(notaAimprimir === undefined) {
            console.log(chalk.red("Not note found"));
        }
        else{
            console.log(chalk.keyword(notaAimprimir.color)(notaAimprimir.titulo));
            console.log(chalk.keyword(notaAimprimir.color)(notaAimprimir.cuerpo));

        }
        return notaAimprimir;
    }

    printListaNotas():Nota[] {
        let notas:Nota[] = [];
        console.log(chalk.green("Tus notas:"));
        this.NotasMap.forEach(nota => {
            notas.push(nota);
            console.log(chalk.keyword(nota.color)(nota.titulo));
        });
        return notas;
    }

    notaAEliminar(titulo:string) {
        if(this.getNotaByTitulo(titulo) === undefined) {
            console.log(chalk.red("Nota no encontrada"));
        }
        else{
            this.NotasMap.delete(titulo);
            console.log(chalk.green("Nota eliminada!"));
        }
    }
}

