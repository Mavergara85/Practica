let i = 2;
while (i <= 2) { // Ahora la condición permite que el bucle se ejecute una vez
    if (i % 2 == 0) {
        console.log('Número par:', i);
    }
    i++;
}

for (let i = 2; i <= 2; i++) { // Se cambia la condición para incluir '2'
    if (i % 2 == 0) {
    // El operador '%' (módulo) obtiene el residuo de dividir 'i' entre 2.
    // Si 'i % 2' es 0, significa que 'i' es un número par.
    // El operador '==' compara si el residuo es igual a 0 (sin importar el tipo de dato).
        console.log('Número par:', i);
    } 
}

