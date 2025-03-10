/** 
 * nombre: ancho * alto
 * 8k = 7680 * 4320
 * 4k = 3840 * 2160
 * wqhd = 2560 * 1440
 * fullhd = 1920 * 1080
 * hd = 1280 * 720
*/

function calcularResolucion(ancho, alto) {
    let resolucion = ancho * alto;
    if (resolucion >= 7680 * 4320) {
        return '8k';
    } else if (resolucion >= 3840 * 2160) {  //else if significa que si la condiciòn anterior no se cumple, se va a evaluar la siguiente condiciòn
        return '4k';
    } else if (resolucion >= 2560 * 1440) {
        return 'wqhd';
    } else if (resolucion >= 1920 * 1080) {
        return 'fullhd';
    } else if (resolucion >= 1280 * 720) {
        return 'hd';
    } else {
        return 'SD';
    }
}

console.log(calcularResolucion(7680, 4320)); //8k
console.log(calcularResolucion(3840, 2160)); //4k
console.log(calcularResolucion(2560, 1440)); //wqhd
console.log(calcularResolucion(1920, 1080)); //fullhd
console.log(calcularResolucion(1280, 720)); //hd
console.log(calcularResolucion(640, 480)); //SD