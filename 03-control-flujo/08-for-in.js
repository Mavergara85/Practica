// Declaramos un objeto 'user' con tres propiedades: id, name y age
let user = {
    id: 140404,
    name: 'zoe',
    age: 20,
};

// Bucle 'for...in' para recorrer las propiedades del objeto 'user'
for (let prop in user) { 
    // 'prop' representa el nombre de cada propiedad (clave) del objeto
    // 'user[prop]' accede al valor de cada propiedad
    console.log(prop, user[prop]); 
}

// Declaramos un array llamado 'animales' con tres elementos tipo string
let animales = ['culebra', 'ratón', 'grillo'];

// Bucle 'for...in' para recorrer los índices del array 'animales'
for (let indice in animales) { 
    // 'indice' representa la posición de cada elemento en el array
    // 'animales[indice]' obtiene el valor en la posición indicada
    console.log(indice, animales[indice]); 
}
