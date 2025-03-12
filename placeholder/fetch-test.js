//EESTE ARCHIVO ES ASINCRONICO

const fetch = require('node-fetch'); // const sirve para declarar una constante, la constaste es fetch y su valor es el modulo node-fetch
// fetch es una función que toma un argumento, la URL a la que se va a hacer la solicitud

fetch('https://jsonplaceholder.typicode.com/posts/1') // fetch toma un argumento, la URL a la que se va a hacer la solicitud
.then((response) => response.json()) // then es una función que toma un argumento, una función que toma un argumento, la respuesta de la solicitud
.then((json) => console.log(json)) // then es una función que toma un argumento, una función que toma un argumento, el JSON de la respuesta
.catch((error) => console.error("Error en la solicitud:", error)); // catch es una función que toma un argumento, una función que toma un argumento, el error de la solicitud

//node fetch-test.js se ejecuta en la terminal y se obtiene el resultado de la solicitud a la URL

// esto es un codigo asincrono, se ejecuta en el orden que se muestra, primero se hace la solicitud, luego se obtiene la respuesta y luego se imprime el JSON de la respuesta
// el JSON es un objeto que se obtiene de la respuesta de la solicitud, en caso de que la solicitud falle, se imprime un mensaje de error