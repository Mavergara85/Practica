let i = 0; // Inicializamos la variable 'i' con un valor de 0

// Bucle 'while' que se ejecuta mientras 'i' sea menor que 10
// Código que se ejecuta mientras la condición sea verdadera
while (i < 10) {
    // Verificamos si 'i' es un número par
    if (i % 2 == 0) { // Si el residuo de 'i' dividido por 2 es 0, es un número par
        console.log('Número par:', i); // Imprimimos el número par en la consola
    }
    i++; // Incrementamos 'i' en 1 para evitar un bucle infinito
}

console.log('Fuera de while'); // Este mensaje se ejecuta después de que termine el bucle
