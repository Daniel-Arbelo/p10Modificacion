import { Pokemon } from './Pokemon';
import { DC } from './DC';
import { StarWars } from './StarWars';
export class Combact {
    constructor(peleador1, peleador2) {
        this.peleador1 = peleador1;
        this.peleador2 = peleador2;
    }
    ataque(peleador1, peleador2) {
        let efectividad;
        //Lucha Pokemon
        if (peleador1 instanceof Pokemon && peleador2 instanceof Pokemon) {
            if (peleador1.getTipo() == peleador2.getTipo()) {
                efectividad = 0.5;
            }
            else if (((peleador1.getTipo() == "fuego") && (peleador2.getTipo() == "hierba")) ||
                ((peleador1.getTipo() == "agua") && (peleador2.getTipo() == "fuego")) ||
                ((peleador1.getTipo() == "hierba") && (peleador2.getTipo() == "agua")) ||
                ((peleador1.getTipo() == "eléctrico") && (peleador2.getTipo() == "agua"))) {
                efectividad = 2;
            }
            else if (((peleador1.getTipo() == "hierba") && (peleador2.getTipo() == "fuego")) ||
                ((peleador1.getTipo() == "fuego") && (peleador2.getTipo() == "agua")) ||
                ((peleador1.getTipo() == "agua") && (peleador2.getTipo() == "hierba")) ||
                ((peleador1.getTipo() == "agua") && (peleador2.getTipo() == "eléctrico"))) {
                efectividad = 0.5;
            }
            else if (((peleador1.getTipo() == "fuego") && (peleador2.getTipo() == "eléctrico")) ||
                ((peleador1.getTipo() == "eléctrico") && (peleador2.getTipo() == "fuego")) ||
                ((peleador1.getTipo() == "hierba") && (peleador2.getTipo() == "eléctrico")) ||
                ((peleador1.getTipo() == "eléctrico") && (peleador2.getTipo() == "hierba"))) {
                efectividad = 1;
            }
        }
        else if ((peleador1 instanceof DC && peleador2 instanceof StarWars) ||
            (peleador1 instanceof Pokemon && peleador2 instanceof DC) ||
            (peleador1 instanceof StarWars && peleador2 instanceof Pokemon)) {
            efectividad = 2;
        }
        else if ((peleador1 instanceof StarWars && peleador2 instanceof DC) ||
            (peleador1 instanceof DC && peleador2 instanceof Pokemon) ||
            (peleador1 instanceof Pokemon && peleador2 instanceof StarWars)) {
            efectividad = 0.5;
        }
        else {
            efectividad = 1;
        }
        return 50 * (peleador1.getAtaque() / peleador2.getDefensa()) * efectividad;
    }
    start() {
        let daño;
        while (this.peleador1.getHp() > 0 && this.peleador2.getHp() > 0) {
            daño = this.ataque(this.peleador1, this.peleador2);
            this.peleador2.setHp(this.peleador2.getHp() - daño);
            console.log(this.peleador1.gritoDeAtaque() + ' de daño ' + daño);
            if (this.peleador2.getHp() <= 0) {
                console.log("Y ha matado a " + this.peleador2.nombre);
                break;
            }
            daño = this.ataque(this.peleador2, this.peleador1);
            this.peleador1.setHp(this.peleador1.getHp() - daño);
            console.log(this.peleador2.gritoDeAtaque() + ' de daño ' + daño);
            if (this.peleador1.getHp() <= 0) {
                console.log("Y ha matado a " + this.peleador1.nombre);
                break;
            }
        }
    }
}
