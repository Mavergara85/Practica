/**
 * Crear un algoritmo que imprima numero impares del 1 al 100
 */

let i = 1;
while (i <= 100) {
    if (i % 2 != 0) {   // Si el residuo de dividir 'i' entre 2 es diferente de 0, significa que 'i' es un número impar.
        console.log('Número impar:', i);
    }
    i++;
}