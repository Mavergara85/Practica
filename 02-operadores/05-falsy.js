//SHORT- CIRCUIT se usa con los operadores lógicos && (AND) y || (OR) 
// para evaluar expresiones de manera más eficiente, deteniéndose tan 
// pronto como el resultado final sea determinado.

//falso
//false
//0
//'' string vacio 
//null
//undefined
//Nan 

//------------------------------------------------------------------------
//¿Qué hace este código? 
// Se declara la variable nombre con el valor "Marvin"
//Luego, username se asigna usando el operador lógico || (OR)
//Si nombre tiene un valor válido (truthy), username tomará su valor.
//Si nombre está vacío (""), es null, undefined o cualquier valor falsy, entonces se asignará "Anonimo"
let nombre = 'Marvin'; 
let username = nombre || 'Anonimo'; 
console.log(username);


// 1️⃣ Se define la función fn1(), que imprime "Soy funcion1" y retorna true.
function fn1() {
    console.log('Soy funcion1'); // Imprime "Soy funcion1"
    return true; // Retorna true
}

// 2️⃣ Se define la función fn2(), que imprime "Soy funcion2" y retorna true.
function fn2() {
    console.log('Soy funcion2'); // Imprime "Soy funcion2"
    return true; // Retorna true
}

// 3️⃣ Se evalúa la expresión fn1() && fn2() y el resultado se almacena en la variable x.
let x = fn1() && fn2(); 

// 🔹 Ejecutando fn1() && fn2():
// - El operador && (AND lógico) evalúa el primer operando (fn1()).
   // ✔ Se ejecuta fn1(), que imprime "Soy funcion1" y devuelve true.
// - Como el primer valor (fn1()) es true, && evalúa el segundo operando (fn2()).
   // ✔ Se ejecuta fn2(), que imprime "Soy funcion2" y devuelve true.
// - Como ambos valores son true, el resultado final de la expresión es true.
console.log(x); // Imprime true
