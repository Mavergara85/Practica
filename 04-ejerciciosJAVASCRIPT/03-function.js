/**
 * indice validar que no sea menor a 0 y que el elemento exista en el array
 */

// switch evalúa la variable inx y ejecuta el case que coincida con su valor.
// getbyIndex se encarga de devolver el elemento de un array en una posición dada.
function getbyIndex(arr, inx) {
    switch (true) {
        case inx < 0:  // case significa que si la condiciòn es verdadera, se va a ejecutar el bloque de còdigo
            return 'El indice no puede ser menor a 0';
        case inx >= arr.length:    //arr.length significa que se va a evaluar el tamaño del array
            return 'El indice no puede ser mayor o igual al tamaño del array';
        default:
            return arr[inx];   //arr[inx] significa que se va a devolver el elemento del array que se encuentra en la posiciòn inx
    }
}

let resultado = getbyIndex([1,2,3,4,5] , 0); //se llama a la funciòn getbyIndex y se le pasa como argumento un array y un nùmero
console.log(resultado);