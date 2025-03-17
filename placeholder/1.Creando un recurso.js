const fetch = require('node-fetch'); // const sirve para declarar una constante, la constaste es fetch y su valor es el modulo node-fetch
// fetch es una función que toma un argumento, la URL a la que se va a hacer la solicitud

fetch('https://jsonplaceholder.typicode.com/posts', { // fetch es una función que toma un argumento, la URL a la que se va a hacer la solicitud
    method: 'POST', // method es una propiedad que se usa para especificar el método HTTP que se va a usar  para hacer la solicitud (POST) es crear un recurso
    body: JSON.stringify({  // body es una propiedad que se usa para enviar datos en la solicitud, JSON.stringify es una función que convierte un objeto en una cadena JSON
    title: 'BEER COMPANY',
    body: 'bar',
    userId: 14,
    }),
    headers: {  // headers es una propiedad que se usa para enviar encabezados en la solicitud
    'Content-type': 'application/json; charset=UTF-8',  // 'Content-type' es un encabezado que se usa para especificar el tipo de contenido de la solicitud
    }, 
})
    .then((response) => response.json())  // then es un método que se usa para manejar la respuesta de la solicitud, 
    // response.json() es un método que convierte la respuesta en un objeto JSON
    .then((json) => console.log(json)); 