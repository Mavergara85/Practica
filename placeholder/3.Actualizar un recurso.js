const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',  // PUT es un método HTTP que se usa para actualizar un recurso
    body: JSON.stringify({  
    id: 14,   // id es un campo que se usa para identificar un recurso
    title: 'Beer Company',  // title es un campo que se usa para especificar el título de un recurso
    body: 'bar', // body es un campo que se usa para especificar el contenido de un recurso
    userId: 1, // userId es un campo que se usa para especificar el ID del usuario que creó el recurso
    }),
    headers: {  // headers es una propiedad que se usa para enviar encabezados en la solicitud
    'Content-type': 'application/json; charset=UTF-8',  // 'Content-type' es un encabezado que se usa para especificar el tipo de contenido de la solicitud
    },
})
    .then((response) => response.json()) // then es un método que se usa para manejar la respuesta de la solicitud,
    .then((json) => console.log(json)); // response.json() es un método que convierte la respuesta en un objeto JSON