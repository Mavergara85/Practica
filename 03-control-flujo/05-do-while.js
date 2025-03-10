let i = 0; // Inicializamos la variable 'i' con un valor de 0

// Bucle 'while' que se ejecuta mientras 'i' sea menor que 3
while (i < 3) { 
    // Verificamos si 'i' es un número par
    if (i % 2 == 0) { // Si el residuo de 'i' dividido por 2 es 0, significa que es un número par
        console.log('Número par:', i); // Imprimimos el número par en la consola
    }
    i++; // Incrementamos 'i' en 1 en cada iteración para evitar un bucle infinito
}

// Bucle 'do while' que ejecuta el bloque al menos una vez antes de verificar la condición
do { 
    // Verificamos si 'i' es un número par
    if (i % 2 == 0) { // Si el residuo de 'i' dividido por 2 es 0, significa que es un número par
        console.log('Número par:', i); // Imprimimos el número par en la consola
    }
    i++; // Incrementamos 'i' en 1 en cada iteración para evitar un bucle infinito
} while (i < 3); // La condición se evalúa después de ejecutar el bloque de código al menos una vez
