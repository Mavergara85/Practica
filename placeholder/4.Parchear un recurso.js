/**
 * ¿Para qué sirve "parchar" un recurso con PATCH?
El método PATCH en una API REST se usa para actualizar parcialmente un recurso existente. No reemplaza todo el recurso como PUT, 
sino que modifica solo los campos específicos que se envían en la petición.
 */


const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/posts/14', {
    method: 'PATCH', 
    body: JSON.stringify({
    title: 'BEER Andina ',
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

    /**
     * Explicación del código:
fetch('https://jsonplaceholder.typicode.com/posts/1')

Se hace una petición al recurso "post con ID 1" en la API.
method: 'PATCH'

Especifica que se quiere modificar parcialmente el recurso.
body: JSON.stringify({ title: 'BEER Andina' })

Solo se actualiza el campo title.
headers: { 'Content-type': 'application/json; charset=UTF-8' }

Se indica que los datos se envían en formato JSON.
     */