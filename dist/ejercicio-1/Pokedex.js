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
