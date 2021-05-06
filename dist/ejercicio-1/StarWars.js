import { Fighter } from './Fighter';
export class StarWars extends Fighter {
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
        return "Que la fuerza me acompañe para este ataqueee";
    }
}
