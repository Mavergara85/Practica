/**
 * Crear un algoritmo que devuelva numero menor y mayor de un array
 */

// function sirve para definir una función 
function encontrarMenorMayor(array) {
    let ordenado = [...array].sort((a, b) => a - b); // Ordenamos de menor a mayor, short sirve para ordenar los elementos de un array
    return { menor: ordenado[0], mayor: ordenado[ordenado.length - 1] };
}

// Prueba con un array de números
console.log(encontrarMenorMayor([50, 10, 3, 100, 1, 20])); // { menor: 1, mayor: 100 } se le pone doble )) porque es un objeto

