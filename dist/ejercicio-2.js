function meshArray(palabras) {
    let palabraAnterior = "";
    let solParcial = "";
    let sol = "";
    palabras.forEach((palabra) => {
        if (palabraAnterior == "") {
            palabraAnterior = palabra;
        }
        else {
            let indice2 = 0;
            for (let indice = 0; indice < palabraAnterior.length; indice++) {
                if (palabraAnterior[indice] == palabra[indice2]) {
                    if (indice + 1 < palabraAnterior.length && palabraAnterior[indice + 1] == palabra[indice2 + 1]) {
                        solParcial = solParcial + palabraAnterior[indice];
                        indice2++;
                    }
                    else if (indice + 1 == palabraAnterior.length) {
                        solParcial = solParcial + palabraAnterior[indice];
                        palabraAnterior = palabra;
                    }
                    else if (indice + 1 < palabraAnterior.length && palabraAnterior[indice + 1] !== palabra[indice2 + 1]) {
                        solParcial = "";
                    }
                }
            }
            if (solParcial == "") {
                return "Error al encadenar";
            }
            else {
                sol = sol + solParcial;
                solParcial = "";
            }
        }
    });
    return sol;
}
let palabrasAencadenar = ["allow", "lowering", "ringmaster", "terror"];
console.log(meshArray(palabrasAencadenar));
