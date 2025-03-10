function cualEsmayor(a, b){
    if(a > b){
        return '${10} es mayor que ${5}'; //si a =10 b=5 en caso que fue verdadera la condiciòn, se me va ejecutar el bloque y se omiten las siguiente condiciones
    } else if (b > a) {
        return '${5} es mayor que ${10}'; //b =5 a=10c 
    }else { // Si ambos son iguales
        return `${a} y ${b} son iguales`;
    }
}


let mayor = cualEsmayor(10, 5)


console.log(mayor);