let a = 10;
console.log(a > 5); // a es mayor true 
console.log(a < 5); //a es menor false
console.log(a >= 10); //a es mayor o igual true
console.log(a <= 10); //a es menor o igual true
console.log(a == 10); //a es igual true
console.log(a != 10); //a es diferente false
console.log(a === 10); //a es estrictamente igual true === es para que sea estrictamente igual
console.log(a !== 10); //a es estrictamente diferente false !== es para que sea estrictamente diferente
console.log(a === '10'); //a es estrictamente igual false 
console.log(a !== '10'); //a es estrictamente diferente true 
console.log(a == '10'); //a es igual true
console.log(a != '10'); //a es diferente false
console.log(a == 10 && a > 5); //a es igual y mayor true las && son para que se cumplan las dos condiciones
console.log(a == 10 && a < 5); //a es igual y menor false
console.log(a == 10 || a < 5); //a es igual o menor true las || son para que se cumpla una de las dos condiciones
console.log(a == 10 || a > 5); //a es igual o mayor true
console.log(!(a == 10)); //a no es igual false el ! es para negar la condición
console.log(!(a != 10)); //a no es diferente true 
console.log(!(a == 10 || a > 5)); //a no es igual o mayor false  el ! es para negar la condición de las || 
console.log(!(a == 10 || a < 5)); //a no es igual o menor true el ! es para negar la condición de las ||
console.log(!(a == 10 && a > 5)); //a no es igual y mayor false el ! es para negar la condición de las &&
