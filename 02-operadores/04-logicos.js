//AND, OR, NOT SIRVEN PARA COMPARAR DOS O MAS CONDICIONES Y DEVOLVER UN VALOR BOOLEANO (TRUE O FALSE)

//AND (&&) PARA QUE SE CUMPLA LA CONDICION AMBAS DEBEN SER VERDADERAS

let mayor = false;
let suscritor = true;

//console.log(true && true);
//console.log(false && true);

console.log('operador and', mayor && suscritor);


//OR 
console.log('operador or', mayor || suscritor); //a diferencia de a, or va devolver true alguno de los evaluen si es true mayor o suscritor

//NOT ! En este caso lo que va a ocurrir es que mayor inicialmente es false pero
//  como le estamos aplicando el operador de not me va a invertir el valor y va a pasar falsa a
// de mostrarme true guardamos nuestros cambios y ahora de regreso aquí en Chrome podemos
//  ver que el operador not me está devolviendo entonces cuándo nosotros podríamos utilizar
//  esta opción de negar una variable 
console.log('operador not', !mayor);
let soloCatalogoInfatil = !mayor;

//Nosotros podríamos utilizar esta opción de negar una variable por ejemplo cuando nosotros queremos indicarle
//  acceso solamente al catálogo infantil para eso vamos a crear una variable que se va a llamar catálogo infantil y 
// esta va a ser igual a la negación de mayor cuando nosotros realicemos esta operación queremos crear una nueva variable
//  la cual va a ser más fácil acceso para indicarle a nuestro código si es que la persona que está viendo actualmente el 
// catálogo tiene acceso solamente al catálogo infantil y acá incluso le puedes cambiar el 
// nombre de la variable a solo catálogo infantil.
