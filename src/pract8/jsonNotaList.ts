import {Nota} from './Nota';
import {NotaList} from './NotaList';
import lowdb from "lowdb";
import FileSync from 'lowdb/adapters/FileSync';

type schemaType = {
    mensajes: {
        titulo: string;
        cuerpo: string;
    }[];
};

export class jsonNotaList extends NotaList {

    private database: lowdb.LowdbSync<schemaType>;

    constructor(notas:Nota[] = [], public nombreUsuario:string){
        super(notas, nombreUsuario);
        this.database = lowdb(new FileSync(nombreUsuario + ".json"));
        if(this.database.has('notas').value()) {
            let dbItems = this.database.get('mensajes').value();
            dbItems.forEach(item =>{
                this.NotasMap.set(item.titulo, new Nota(item.titulo, item.cuerpo));
            });
        }else{
            this.database.set('mensajes', notas).write();
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
        this.database.set('mensajes', [...this.NotasMap.values()]).write(); 
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