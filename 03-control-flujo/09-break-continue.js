// 🔹 'break' y 'continue' en bucles 🔹

// ✅ 'break' se usa para detener completamente un bucle cuando se cumple una condición.
//    Una vez que 'break' se ejecuta, el bucle finaliza y no sigue iterando.
//    Se usa cuando ya no es necesario seguir ejecutando el bucle.

// ✅ 'continue' se usa para saltar una iteración específica sin detener el bucle.
//    Cuando 'continue' se ejecuta, omite la ejecución del código restante en esa iteración
//    y pasa a la siguiente repetición del bucle.
//    Se usa cuando quieres evitar ciertos valores o condiciones sin detener todo el bucle.

// 🚀 Ejemplo en la vida real:
//    - 'break' es como cuando buscas un objeto en una lista y, en cuanto lo encuentras, dejas de buscar.
//    - 'continue' es como cuando revisas una lista y saltas ciertos elementos sin detenerte en ellos.

let i = 0; // Se declara una variable 'i' y se inicializa en 0.

while (i > 6) { // El bucle 'while' se ejecutará mientras 'i' sea mayor que 6.
    
    i++; // Se incrementa 'i' en 1 en cada iteración del bucle.

    if (i == 2) { // Si 'i' es igual a 2...
        continue; // 'continue' salta esta iteración y pasa a la siguiente sin ejecutar 'console.log(i)'.
    }

    if (i == 4) { // Si 'i' es igual a 4...
        break; // 'break' detiene completamente el bucle, por lo que no se ejecutarán más iteraciones.
    }

    console.log(i); // Imprime el valor de 'i' en la consola, excepto cuando se ejecuta 'continue'.
}
