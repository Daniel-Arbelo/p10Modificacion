class GestorBibliografico {
    constructor(articulos) {
        this.articulos = articulos;
    }
    addArticulo(nuevoArticulo) {
        this.articulos.push(nuevoArticulo);
    }
    inforBaseDatos() {
        console.table(this.articulos, ["titulo", "fecha", "autores", "editorial"]);
    }
    busquedaPalabrasClave(palabra) {
        let sol = [];
        this.articulos.forEach((articulo) => {
            articulo.getPalabrasClave().forEach(element => {
                if (element == palabra) {
                    sol.push(articulo);
                }
            });
        });
        console.table(sol, ["titulo", "fecha", "autores", "editorial"]);
        return sol;
    }
    busquedaPalabrasClaveAPA(palabra) {
        let sol = [];
        this.articulos.forEach((articulo) => {
            articulo.getPalabrasClave().forEach(element => {
                if (element == palabra) {
                    sol.push(articulo.referenciaAPA());
                }
            });
        });
        console.table(sol);
        return sol;
    }
    busquedaFecha(fecha) {
        let sol = [];
        this.articulos.forEach((articulo) => {
            if (articulo.getFecha() == fecha) {
                sol.push(articulo);
            }
        });
        console.table(sol, ["titulo", "fecha", "autores", "editorial"]);
        return sol;
    }
    busquedaEditorial(editorial) {
        let sol = [];
        this.articulos.forEach((articulo) => {
            if (articulo.getEditorial() == editorial) {
                sol.push(articulo);
            }
        });
        console.table(sol, ["titulo", "fecha", "autores", "editorial"]);
        return sol;
    }
    busquedaNombreAutor(nombre) {
        let sol = [];
        this.articulos.forEach((articulo) => {
            articulo.getAutor().forEach(element => {
                if (element == nombre) {
                    sol.push(articulo);
                }
            });
        });
        console.table(sol, ["titulo", "fecha", "autores", "editorial"]);
        return sol;
    }
}
