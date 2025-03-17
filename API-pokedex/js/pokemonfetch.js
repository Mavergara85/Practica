const fetch = require('node-fetch'); // Importa el módulo 'node-fetch' para poder hacer solicitudes HTTP en Node.js

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=10'; // Define la URL de la API de Pokémon con un límite de 10 resultados

fetch(URL) // Realiza una solicitud HTTP GET a la URL para obtener la lista de 10 Pokémon
    .then(response => response.json()) // Convierte la respuesta en formato JSON
    .then(data => {  // Procesa los datos obtenidos en formato JSON
        const pokemons = data.results; // Extrae la lista de Pokémon de la respuesta
        pokemons.forEach(pokemon => { // Itera sobre la lista de Pokémon
            fetch(pokemon.url) // Realiza una nueva solicitud a la URL de cada Pokémon para obtener más detalles
                .then(res => res.json()) // Convierte la respuesta en JSON
                .then(pokeData => { // Procesa los datos del Pokémon
                    console.log(`ID: ${pokeData.id} - ${pokeData.name} - Altura: ${pokeData.height}m - Peso: ${pokeData.weight}kg`); 
                    // Muestra en la consola el ID, nombre, altura y peso del Pokémon
                })
                .catch(err => console.error("Error obteniendo detalles:", err)); // Captura y muestra cualquier error en la obtención de detalles
        });
    })
    .catch(error => console.error("Error en la solicitud:", error)); // Captura y muestra cualquier error en la solicitud principal a la API

