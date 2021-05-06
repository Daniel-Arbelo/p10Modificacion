"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plato = void 0;
class Plato {
    constructor(alimentos, tipo, nombre, alimentoPredominante) {
        this.alimentos = alimentos;
        this.tipo = tipo;
        this.nombre = nombre;
        this.alimentoPredominante = alimentoPredominante;
        this.AlimentosMap = new Map();
        for (let i = 0; i < alimentos.length; i++) {
            this.AlimentosMap.set(alimentos[i].nombre, alimentos[i]);
        }
    }
    get_lista_ingredientes() {
        console.table([...this.AlimentosMap.values()], ["nombre", "tipo", "kcal", "proteinas", "lipidos", "hidratos"]);
    }
    nuevoAlimento(alimento) {
        this.AlimentosMap.set(alimento.nombre, alimento);
    }
    getAlimentos(incluirAEliminar) {
        return [...this.AlimentosMap.values()].filter(alimento => incluirAEliminar || !alimento.eliminarAliento);
    }
    getAlimentoByNombre(nombre) {
        return this.AlimentosMap.get(nombre);
    }
    alimentoAEliminar(nombre) {
        this.AlimentosMap.forEach(alimento => {
            if (alimento.nombre === nombre) {
                this.AlimentosMap.delete(alimento.nombre);
            }
        });
    }
    // Contenido nutricional
    get_precio() {
        let precioTotal = 0;
        this.alimentos.forEach((alimento) => {
            precioTotal += alimento.get_precio();
        });
        return precioTotal;
    }
    get_kcal() {
        let kcalTotal = 0;
        this.alimentos.forEach((alimento) => {
            kcalTotal += alimento.get_kcal();
        });
        return kcalTotal;
    }
    get_proteinas() {
        let proteinasTotal = 0;
        this.alimentos.forEach((alimento) => {
            proteinasTotal += alimento.get_proteinas();
        });
        return proteinasTotal;
    }
    get_lipidos() {
        let lipidosTotal = 0;
        this.alimentos.forEach((alimento) => {
            lipidosTotal += alimento.get_lipidos();
        });
        return lipidosTotal;
    }
    get_hidratos() {
        let hidratosTotal = 0;
        this.alimentos.forEach((alimento) => {
            hidratosTotal += alimento.get_hidratos();
        });
        return hidratosTotal;
    }
}
exports.Plato = Plato;
