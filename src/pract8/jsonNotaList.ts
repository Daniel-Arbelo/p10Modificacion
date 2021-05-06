import {Nota} from './Nota';
import {NotaList} from './NotaList';
import lowdb from "lowdb";
import FileSync from 'lowdb/adapters/FileSync';

type schemaType = {
    notas: {
        titulo: string;
        cuerpo: string;
        color: string;
    }[];
};

export class jsonNotaList extends NotaList {

    private database: lowdb.LowdbSync<schemaType>;

    constructor(notas:Nota[] = [], public nombreUsuario:string){
        super(notas, nombreUsuario);
        this.database = lowdb(new FileSync(nombreUsuario + ".json"));
        if(this.database.has('notas').value()) {
            let dbItems = this.database.get('notas').value();
            dbItems.forEach(item =>{
                this.NotasMap.set(item.titulo, new Nota(item.titulo, item.cuerpo, item.color));
            });
        }else{
            this.database.set('notas', notas).write();
            notas.forEach(item =>{
                this.NotasMap.set(item.titulo, item);
            });
        }
    }

    empty():boolean {
        if(this.NotasMap.size === 0) {
            return true;
        }
        else{
            return false;
        }
    }

    storeNota() {
        this.database.set('notas', [...this.NotasMap.values()]).write(); 
    }

    nuevaNota(nota: Nota): string {
        let retornar = super.nuevaNota(nota);
        
        this.storeNota();
        return retornar;
    }

    notaAEliminar(titulo:string){
        super.notaAEliminar(titulo);
        this.storeNota();
    }

}