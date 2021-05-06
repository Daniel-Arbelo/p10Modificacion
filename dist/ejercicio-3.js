function meanAndConcatenate(cadena) {
    let sol = [0, ""];
    let cantidadNum = 0;
    let sumatorio = 0;
    let cadenaSol = "";
    cadena.forEach((caracter) => {
        if (!isNaN(caracter)) {
            cantidadNum++;
            sumatorio = sumatorio + caracter;
        }
        else {
            cadenaSol = cadenaSol + caracter;
        }
    });
    sol[0] = sumatorio / cantidadNum;
    sol[1] = cadenaSol;
    return sol;
}
let cadena = ["u", 6, "d", 1, "i", "w", 6, "s", "t"];
console.log(meanAndConcatenate(cadena));
