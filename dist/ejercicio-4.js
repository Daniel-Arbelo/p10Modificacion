function moveZeros(array) {
    let finalArray = array.length;
    for (let indice = 0; indice < finalArray; indice++) {
        if (array[indice] == 0) {
            for (let indice2 = indice; indice2 < finalArray - 1; indice2++) {
                array[indice2] = array[indice2 + 1];
                array[indice2 + 1] = 0;
            }
            finalArray--;
            indice--;
        }
    }
    return array;
}
let array = [1, 0, 1, 2, 0, 1, 3];
console.log(moveZeros(array));
