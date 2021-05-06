import { Fighter } from './Fighter';
export class DC extends Fighter {
    constructor(nombre, peso, altura, ataque, defensa, hp, velocidad) {
        super(nombre, peso, altura, ataque, defensa, hp, velocidad);
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.ataque = ataque;
        this.defensa = defensa;
        this.hp = hp;
        this.velocidad = velocidad;
    }
    gritoDeAtaque() {
        return "Yo " + this.nombre + " te lanzo un SUPER ataque!!";
    }
}
