let accion = 'listar'; // Declaramos la variable 'accion' con el valor 'listar'.

// 'switch' evalúa la variable 'accion' y ejecuta el 'case' que coincida con su valor.
switch (accion) {
    case 'listar': // 'case' compara si 'accion' es igual a 'listar'.
        console.log('Acción de listar'); // Si coincide, ejecuta este bloque de código.
        break; // 'break' detiene la ejecución del 'switch' y evita que continúe con otros 'case'.

    case 'guardar': // Otro 'case' que se ejecutaría si 'accion' fuera 'guardar'.
        console.log('Acción de guardar'); // Muestra un mensaje en la consola.
        break; // 'break' detiene la ejecución aquí si este 'case' se ejecuta.

    default: // 'default' se ejecuta si ningún 'case' coincide con el valor de 'accion'.
        console.log('Acción no reconocida'); // Muestra un mensaje si no hay coincidencia.
}
