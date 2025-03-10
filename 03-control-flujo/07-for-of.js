// while
// do while
//for
// Declaramos un array llamado 'animales' que contiene tres elementos tipo string
let animales = ['chancho feliz', 'dragon', 'perrito']; 

// Bucle 'for of': Recorre directamente cada elemento del array 'animales'
for (let animal of animales) { 
    console.log(animal); // Imprime cada elemento del array en la consola
}

// Inicializamos la variable 'i' con un valor de 0
let i = 0;

// Bucle 'while': Se ejecuta mientras la condición sea verdadera
while (i < animales.length) { // 'animales.length' obtiene la cantidad de elementos en el array
    console.log(animales[i]); // Imprime el elemento en la posición 'i' del array
    i++; // Incrementamos 'i' en 1 para recorrer el siguiente elemento del array
}

