import { Fighter } from './Fighter';
class Pokemon extends Fighter {
    constructor(nombre, peso, altura, tipo, ataque, defensa, hp, velocidad) {
        super(nombre, peso, altura, ataque, defensa, hp, velocidad);
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.tipo = tipo;
        this.ataque = ataque;
        this.defensa = defensa;
        this.hp = hp;
        this.velocidad = velocidad;
    }
    getTipo() {
        return this.tipo;
    }
    gritoDeAtaque() {
        return "Pokemon " + this.nombre + " lanzando ataque!!";
    }
}
export { Pokemon };
