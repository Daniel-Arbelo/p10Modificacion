class Pokemon {
    constructor(nombre, peso, altura, tipo, ataque, defensa, hp, velocidad) {
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
    getAtaque() {
        return this.ataque;
    }
    getDefensa() {
        return this.defensa;
    }
    getHp() {
        return this.hp;
    }
    getVelocidad() {
        return this.velocidad;
    }
    setHp(newHp) {
        this.hp = newHp;
    }
}
class Pokedex {
    constructor(pokemons) {
        this.pokemons = pokemons;
    }
    addPokemon(newPokemon) {
        this.pokemons.push(newPokemon);
    }
    getNumberOfPokemons() {
        return this.addPokemon.length;
    }
    getPokemon(index) {
        return this.pokemons[index];
    }
}
class Combact {
    constructor(pokemon1, pokemon2) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }
    ataque(pokemon1, pokemon2) {
        let efectividad;
        if (pokemon1.getTipo() == pokemon2.getTipo()) {
            efectividad = 0.5;
        }
        else if (((pokemon1.getTipo() == "fuego") && (pokemon2.getTipo() == "hierba")) ||
            ((pokemon1.getTipo() == "agua") && (pokemon2.getTipo() == "fuego")) ||
            ((pokemon1.getTipo() == "hierba") && (pokemon2.getTipo() == "agua")) ||
            ((pokemon1.getTipo() == "eléctrico") && (pokemon2.getTipo() == "agua"))) {
            efectividad = 2;
        }
        else if (((pokemon1.getTipo() == "hierba") && (pokemon2.getTipo() == "fuego")) ||
            ((pokemon1.getTipo() == "fuego") && (pokemon2.getTipo() == "agua")) ||
            ((pokemon1.getTipo() == "agua") && (pokemon2.getTipo() == "hierba")) ||
            ((pokemon1.getTipo() == "agua") && (pokemon2.getTipo() == "eléctrico"))) {
            efectividad = 0.5;
        }
        else if (((pokemon1.getTipo() == "fuego") && (pokemon2.getTipo() == "eléctrico")) ||
            ((pokemon1.getTipo() == "eléctrico") && (pokemon2.getTipo() == "fuego")) ||
            ((pokemon1.getTipo() == "hierba") && (pokemon2.getTipo() == "eléctrico")) ||
            ((pokemon1.getTipo() == "eléctrico") && (pokemon2.getTipo() == "hierba"))) {
            efectividad = 1;
        }
        return 50 * (pokemon1.getAtaque() / pokemon2.getDefensa()) * efectividad;
    }
    start() {
        let daño;
        while (this.pokemon1.getHp() > 0 && this.pokemon2.getHp() > 0) {
            daño = this.ataque(this.pokemon1, this.pokemon2);
            this.pokemon2.setHp(this.pokemon2.getHp() - daño);
            console.log('El pokemon ' + this.pokemon1.nombre + ' ha realizado un ataque de daño ' + daño);
            if (this.pokemon2.getHp() <= 0) {
                console.log("Y ha matado a " + this.pokemon2.nombre);
                break;
            }
            daño = this.ataque(this.pokemon2, this.pokemon1);
            this.pokemon1.setHp(this.pokemon1.getHp() - daño);
            console.log('El pokemon ' + this.pokemon2.nombre + ' ha realizado un ataque de daño ' + daño);
            if (this.pokemon1.getHp() <= 0) {
                console.log("Y ha matado a " + this.pokemon1.nombre);
                break;
            }
        }
    }
}
let bulbasur = new Pokemon("Bulbasaur", 50, 80, "hierba", 49, 49, 45, 45);
let charmander = new Pokemon("Charmander", 50, 25, "fuego", 52, 43, 39, 60);
let combate = new Combact(bulbasur, charmander);
combate.start();
