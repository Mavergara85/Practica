function suma (a, b) {  // a y b son parámetros
    console.log(arguments); // [20, 38]
    return a + b;
}

let resultado = suma(20, 38,6,2,9);   // 20 y 38 son argumentos
console.log(resultado);
console.log(typeof suma); // function