class Articulo {
    constructor(titulo, autores, email, palabrasClave, resumen, fecha, editorial, numeroDeCitas) {
        this.titulo = titulo;
        this.autores = autores;
        this.email = email;
        this.palabrasClave = palabrasClave;
        this.resumen = resumen;
        this.fecha = fecha;
        this.editorial = editorial;
        this.numeroDeCitas = numeroDeCitas;
    }
    referenciaAPA() {
        let sol = "";
        for (let index = 0; index < this.autores.length; index++) {
            if (this.autores.length == 1) {
                sol += this.autores[index];
            }
            else if (index == (this.autores.length - 1)) {
                sol += " y " + this.autores[index];
            }
            else {
                sol += this.autores[index] + ", ";
            }
        }
        sol += "(" + this.fecha + ") " + this.titulo;
        return sol;
    }
    getTitulo() {
        return this.titulo;
    }
    getPalabrasClave() {
        return this.palabrasClave;
    }
    getFecha() {
        return this.fecha;
    }
    getEditorial() {
        return this.editorial;
    }
    getAutor() {
        return this.autores;
    }
}
