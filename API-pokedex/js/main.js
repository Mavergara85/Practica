// Selecciona el contenedor donde se mostrarán los Pokémon en el DOM
const listaPokemon = document.querySelector("#listaPokemon");

// Selecciona todos los botones de filtro en el encabezado
const botonesHeader = document.querySelectorAll(".btn-header");

// URL base de la API de Pokémon
let URL = "https://pokeapi.co/api/v2/pokemon/";

// Bucle para obtener los primeros 151 Pokémon (Generación 1)
for (let i = 1; i <= 151; i++) {  
    fetch(URL + i) // Hace una solicitud GET a la API para cada Pokémon
        .then(response => response.json())  // Convierte la respuesta en JSON
        .then(data => mostrarPokemon(data)) // Llama a la función para mostrar los datos del Pokémon
        .catch(error => console.error("Error al obtener Pokémon:", error)); // Captura errores en la solicitud
}

// Función para mostrar la información de un Pokémon en la página
function mostrarPokemon(poke) { 
    console.log(poke); // Muestra los datos del Pokémon en la consola

    // Obtiene los tipos del Pokémon y los convierte en etiquetas HTML
    let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`).join('');

    // Formatea el ID del Pokémon para que tenga 3 dígitos (Ej: 001, 025, 150)
    let pokeId = poke.id.toString().padStart(3, '0');

    // Crea un contenedor para el Pokémon
    const div = document.createElement("div"); 
    div.classList.add("pokemon"); // Agrega la clase 'pokemon' al div

    // Inserta la información del Pokémon en el HTML del div,innerHTML Permite insertar contenido HTML dentro de un elemento.
    //${} (Template Literals)Permite insertar variables dentro de cadenas de texto usando backticks 
    div.innerHTML = ` 
        <p class="pokemon-id-back">#${pokeId}</p>
        <div class="pokemon-imagen">
            <img src="${poke.sprites?.other["official-artwork"]?.front_default || 'default-image.png'}" alt="${poke.name}">
        </div> 
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokeId}</p>            
                <h2 class="pokemon-nombre">${poke.name}</h2>
            </div>
            <div class="pokemon-tipos">                     
                ${tipos} <!-- Aquí se muestran los tipos del Pokémon -->
            </div>
            <div class="pokemon-stats">
                <p class="stat">${poke.height}m</p> <!-- Muestra la altura del Pokémon -->  
                <p class="stat">${poke.weight}kg</p> <!-- Muestra el peso del Pokémon -->
            </div>
        </div>
    `;

    // Agrega el Pokémon al contenedor en la página
    listaPokemon.append(div);
}

// Agrega un evento de clic a cada botón del encabezado para filtrar por tipo de Pokémon
botonesHeader.forEach(boton => 
    boton.addEventListener("click", async (event) => {  
        const botonId = event.currentTarget.id; // Obtiene el ID del botón clicado
        listaPokemon.innerHTML = ""; // Limpia la lista actual de Pokémon en la pantalla

        const newURL = `https://pokeapi.co/api/v2/type/${botonId}`; // Construye la nueva URL para filtrar por tipo

        try { // Inicia el bloque try, que ejecuta el código y permite capturar errores en caso de que ocurran.
            const response = await fetch(newURL); // Hace una solicitud a la API de tipos de Pokémon
            const data = await response.json(); // Convierte la respuesta en JSON
            
            // Itera sobre la lista de Pokémon de ese tipo
            data.pokemon.forEach(async (poke) => {
                const pokeData = await fetch(poke.pokemon.url).then(res => res.json()); // Obtiene la información de cada Pokémon
                mostrarPokemon(pokeData); // Muestra el Pokémon en la página
            });
        } catch (error) {
            console.error('Error:', error); // Captura errores en la solicitud
        }
    })
);
