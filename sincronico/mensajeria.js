//


/**Paso 1: Entender lo que quiero hacer
Quiero crear un sistema básico en el que:

El usuario envíe un mensaje.
El servidor lo procese.
El destinatario lo reciba y responda.
El ciclo se repita para mantener la conversación.
🔹 Paso 2: Estructura del código
Usaremos:

Funciones async y await: Para que las promesas se resuelvan en orden (de forma secuencial).
Promesas (Promise): Para simular la espera de procesamiento.
setTimeout: Para representar la demora en la entrega de mensajes.
 */


// Paso 3: Crear las funciones
//aqui explicare paso a paso el codigo

//simulacion de envio de mensaje de whatsapp de manera sincronica con async y await

//funcion que simula el envio de un mensaje
async function enviarMensaje(mensaje){   // async esta haciendo que la funcion sea asincrona y function es la palabra clave para declarar una funcion
    console.log("Enviando mensaje:", mensaje);  

    //esperamos 2 segundos
    await new Promise (resolve => setTimeout(resolve, 2000));  //resolve es una funcion que se ejecuta cuando se resuelve la promesa y 
    // setTimeout es una funcion que se ejecuta despues de un tiempo determinado

    console.log("Mensaje enviado", mensaje);
    return mensaje;
}

//funcion que simula el procesamiento de un mensaje y responder
async function recibirMensaje(mensajeRecibido) {
    console.log("Recibiendo mensaje:");

//simula el tiempo que tarda en llegar el mensaje
await new Promise(resolve => setTimeout(resolve, 3000));

console.log("Mensaje recibido:", mensajeRecibido);

// Respuesta automática
let respuesta = `Echo: ${mensajeRecibido}`;

//simula el tiempo de escribir y enviar la respuesta
await new Promise(resolve => setTimeout(resolve, 2000));

console.log(" Respuesta enviada:", respuesta);
    return respuesta;
}

// Simula recibir una respuesta lógica según el mensaje enviado
async function recibirMensaje(mensajeRecibido) {  // async esta haciendo que la funcion sea asincrona y function es la palabra clave para declarar una funcion
    return new Promise(resolve => {
        setTimeout(() => {
            let respuesta;
            switch (mensajeRecibido) {  // switch sirve en este caso para evaluar el mensaje recibido
                case "Hola, ¿cómo estás?":  // case se esta usando para evaluar el mensaje recibido
                    respuesta = "¡Hola! Estoy bien, ¿y tú?";
                    break;  // break rompe el switch 
                case "¿Qué planes para hoy?":
                    respuesta = "Nada especial, ¿tienes algo en mente?";
                    break;
                case "¿Vamos por café?":
                    respuesta = "¡Sí! Me encanta la idea, ¿a qué hora?";
                    break;
                default:   // default se esta utlizando para dar una respuesta por defecto
                    respuesta = "No entendí bien, ¿me repites?";
            }
            console.log("Respuesta recibida:", respuesta);
            resolve(respuesta);
        }, 1500); // Simula 1.5 segundos para recibir la respuesta
    });
}

// Simula una conversación completa
async function chat() {
    console.log("🟢 Iniciando conversación...");

    // Primera ronda de mensajes
    let mensaje1 = await enviarMensaje("Hola, ¿cómo estás?");
    let respuesta1 = await recibirMensaje(mensaje1);

    // Segunda ronda
    let mensaje2 = await enviarMensaje("¿Qué planes para hoy?");
    let respuesta2 = await recibirMensaje(mensaje2);

    // Tercera ronda
    let mensaje3 = await enviarMensaje("¿Vamos por café?");
    let respuesta3 = await recibirMensaje(mensaje3);

    console.log("🔴 Conversación finalizada.");
}

// Llamamos la función para iniciar el chat
chat();


/**
 * ¿Por qué este código es 100% Síncrono?
✔️ Usa await en cada llamada a enviarMensaje() y recibirMensaje().
✔️ No se ejecuta la siguiente línea hasta que la anterior termine.
✔️ El flujo es lineal y fácil de entender.
 */