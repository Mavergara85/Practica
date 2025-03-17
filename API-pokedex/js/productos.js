//Esto asegurará que Node.js siempre encuentre el archivo, sin importar desde qué carpeta ejecutes el script. _dirname sirve para obtener la ruta del directorio actual.

const fs = require('fs'); // fs es un modulo de Node.js que nos permite trabajar con el sistema de archivos
const path = require('path'); // path es un modulo de Node.js que nos permite trabajar con rutas de archivos

const filePath = path.join(__dirname, 'productos.json'); // __dirname es una variable global que nos da la ruta del directorio actual, 
// file path es una funcion que nos da la ruta del archivo, path.join es una funcion que nos permite unir rutas de archivos

fs.readFile(filePath, 'utf-8', (err, data) => { // fs.readFile es una funcion que recibe como parametro la ruta del archivo, el tipo de codificacion y una funcion de callback
    //parametro es un error y la data que es la informacion del archivo (err, data)
    if (err) { // si hay un error en la lectura del archivo  nos mostrara un mensaje de error
        console.error('Error al leer el archivo:', err);
        return;
    }
    const productos = JSON.parse(data);  // JSON.parse convierte la informacion del archivo a un objeto de JavaScript
    console.log(productos);
});


/**Si solo quieres leer e imprimir el JSON en la terminal:
 * Node.js (Ejecutando en la Terminal)
Usa fs.readFile() para leer el JSON:

const fs = require('fs'); 
const path = require('path');

const filePath = path.join(__dirname, 'productos.json'); 

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    const productos = JSON.parse(data);
    console.log("productos:");
    productos.forEach(producto => {  
        console.log(`${producto.nombre} - ${producto.tipo}`);
    });
});
*/

/**Node.js (Ejecutando en la Terminal)
Usa fs.readFile() para leer el JSON:
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'productos.json'); 

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    const productos = JSON.parse(data);
    console.log("Lista de productos:");
    console.log(productos);
});
*/


/**
 * Este código solo funciona en un navegador porque usa fetch() y document.createElement() para manipular el DOM.
 * fetch("/API-pokedex/js/productos.json")
    .then(response => response.json())
    .then(data => {
        const ul = document.createElement("ul"); // Creamos una lista UL
        document.body.appendChild(ul); // Agregamos la lista al body

        data.forEach(producto => {
            const li = document.createElement("li");
            li.innerHTML = `${producto.nombre} - ${producto.tipo}`;
            ul.appendChild(li); // Agregamos el elemento a la lista
        });
    })
    .catch(error => console.error("Error en la solicitud:", error));
 */