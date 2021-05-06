export class Fighter {
    constructor(nombre, peso, altura, ataque, defensa, hp, velocidad) {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.ataque = ataque;
        this.defensa = defensa;
        this.hp = hp;
        this.velocidad = velocidad;
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
