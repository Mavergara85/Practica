const fetch = require('node-fetch'); // Importa el módulo 'node-fetch' para realizar solicitudes HTTP en Node.js

// Función asincrónica para obtener usuarios desde una URL
async function obtenerUsuarios(url) {  //Declara una función asíncrona que recibe una url como parámetro.
// se usa para definir una función asíncrona en JavaScript. Las funciones asíncronas permiten escribir código que espera la 
// resolución de promesas sin necesidad de usar .then(), haciendo que el código sea más limpio y fácil de leer.
    try {
        const response = await fetch(url); // Realiza la solicitud HTTP GET a la URL proporcionada, fetch(url) devuelve una promesa.
        //await detiene la ejecución hasta que la promesa se resuelve (es decir, hasta que la API responde).
        const data = await response.json(); // Convierte la respuesta en JSON, await hace que la ejecución espere hasta que los datos estén listos.El JSON resultante se almacena en data.
        return data; // Retorna los datos obtenidos
    } catch (error) { // Captura errores si la solicitud falla
        console.error("Error en la solicitud:", error); // Muestra el error en la consola
    }
}

// Función asincrónica para mostrar los usuarios en la consola
async function mostrarUsuarios() { 
    const usuarios = await obtenerUsuarios('https://jsonplaceholder.typicode.com/users'); // Llama a la función para obtener los usuarios
    console.log("Lista de usuarios:\n"); // Imprime un encabezado en la consola

    usuarios.forEach(usuario => { // Itera sobre la lista de usuarios
        console.log(`ID: ${usuario.id} - Nombre: ${usuario.name} - Email: ${usuario.email}`); 
        // Muestra el ID, nombre y correo electrónico de cada usuario
    });
}

// Llama a la función para mostrar los usuarios
mostrarUsuarios();
