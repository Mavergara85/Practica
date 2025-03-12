const fetch = require('node-fetch'); // const sirve para declarar una constante, la constaste es fetch y su valor es el modulo node-fetch
// fetch es una función que toma un argumento, la URL a la que se va a hacer la solicitud

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())  // then es una función que toma un argumento, el argumento viene siendo la respuesta de la solicitud, 
// la respuesta es un objeto que tiene un método llamado json
.then(json => console.log(json)) // then es una función que toma un argumento, el argumento viene siendo el JSON de la respuesta
.catch(error => console.error('Error:', error)); // catch es una función que toma un argumento, el argumento viene siendo el error de la solicitud

// Compare this snippet from arrays/Arrayindice.js:

let frutas = ["Manzana", "Banana", "Pera"]; // Array de frutas
let primero = frutas[0]; //trae el primer elemento del array
// Manzana

let ultimo = frutas[frutas.length - 1]; //trae el último elemento del array
// pera

console.log(primero,ultimo);
