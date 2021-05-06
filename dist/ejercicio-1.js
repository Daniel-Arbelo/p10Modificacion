function decodeResistor(colores) {
    let valoresColores = [["Negro", 0], ["Marrón", 1], ["Rojo", 2], ["Naranja", 3], ["Amarillo", 4], ["Verde", 5], ["Azul", 6], ["Violeta", 7], ["Gris", 8], ["Blanco", 9]];
    let color = "";
    let numColor = 1;
    let sol;
    for (let indice = 0; indice < colores.length; indice++) {
        if (colores.charAt(indice).match("-") || indice == colores.length - 1) {
            if (numColor == 1) {
                numColor++;
                valoresColores.forEach((valor) => {
                    if (valor[0] == color) {
                        sol = valor[1] * 10;
                        color = "";
                    }
                });
            }
            else if (numColor == 2) {
                if (indice == colores.length - 1)
                    color = color + colores.charAt(indice);
                valoresColores.forEach((valor) => {
                    if (valor[0] == color) {
                        sol += valor[1];
                    }
                });
                return sol;
            }
        }
        else {
            color = color + colores.charAt(indice);
        }
    }
}
console.log(decodeResistor("Marrón-Verde-Violeta"));
