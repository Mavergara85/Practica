// HACER UN CAFÈ PASO A PASO
// ESTE ARCHIVO ES ASINCRONICO pero parece sincrónico gracias a async/await.
// SINCRONIZAR TAREAS CON ASYNC Y AWAIT: ASYNC SIRVE PARA DECIR QUE UNA FUNCIÓN ES ASÍNCRONA Y AWAIT PARA ESPERAR A QUE SE RESUELVA UNA PROMESA

//FUNCION QUE SIMULA UN RETRASO ( COMO SI FUERA UNA OPERACION ASINCRONICA REAL)

function esperar(ms){ // FUNCION QUE SIMULA UN RETRASO ( COMO SI FUERA UNA OPERACION ASINCRONICA REAL) Y MS ES EL TIEMPO DE RETRASO EN MILISEGUNDOS
    return new Promise(resolve => setTimeout(resolve, ms)); //resolve es una funcion que se ejecuta cuando se resuelve 
    // la promesa (resolve => setTimeout(resolve, ms)); es una funcion que se ejecuta cuando se resuelve la promesa
}

//FUNCION QUE SIMULA HACER UN CAFÈ

async function hacerCafe(){  // async funciona para decir que una función es asíncrona
    try {   // try es una palabra clave que se usa para probar un bloque de código
        console.log('Ponemos el agua a calentar');
        await esperar(2000);    //await es una palabra clave que se usa para esperar a que se resuelva una promesa
        console.log('El agua caliente');

        console.log('agregando cafe');
        await esperar(2000);
        console.log('Cafe agregado');

        console.log('agregando azucar');
        await esperar(2000);
        console.log('Azucar agregado');

        console.log('Revolver el cafe');
        await esperar(2000);
        console.log('Cafe listo');

        {
            console.log('Sirviendo cafe');
            await esperar(2000);
            console.log('Cafe servido');
        }


    }
    catch (error){
        console.error('Error en la preparación del café:', error);
    }
}

//LLAMO A LA FUNCION QUE HACE EL CAFÈ

hacerCafe();