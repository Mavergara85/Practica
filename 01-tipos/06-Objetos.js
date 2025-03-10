//personajes de Series

let personaje1 = "Tanjiro"; //string
let anime= "Demon Slayer";  //string
let edad= 15;  //

let personaje = {   //objeto
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 15,
};
console.log(personaje); //imprime el objeto
console.log(personaje.nombre); //imprime el nombre del personaje
console.log(personaje['anime']);  //imprime el anime del personaje


personaje.edad = 18;

let llave = 'edad';
personaje[llave] = 17; //personaje['edad'] = 17;


delete personaje.anime; //borra la propiedad anime
console.log(personaje);


