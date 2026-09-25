

/** valida el formato de un correo electrónico.
*/
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

/** valida que un texto contenga solo letras (acentos y espacios).
*/
function soloLetras(texto) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

/** valida la long. máxima de un número o cadena numérica
*/
function validarLongitud(numero, maxLongitud) {
    const strNum = String(numero).trim();
    return strNum.length > 0 && strNum.length <= maxLongitud;
}

/** calcula la edad 
*/
function calcularEdad(fechaNacimiento) {
    if (!fechaNacimiento) return 0;
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad < 0 ? 0 : edad;
}

/** valida si es mayor de edad 
*/
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

/** valida una contraseña (8 caract. , 1 may. , 1 min. , 1 num.  y 1 carc. especial) 
*/
function validarPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._\-#])[A-Za-z\d@$!\%*?&._\-#]{8,}$/;
    return regex.test(password);
}

/** formato (XXX) XXX-XXXX del numero telefonico
*/
function formatearTelefono(telefono) {
    const limpios = String(telefono).replace(/\D/g, '');
    if (limpios.length !== 10) return '';
    return `(${limpios.slice(0,3)}) ${limpios.slice(3,6)}-${limpios.slice(6)}`;
}

/** capitaliza la primera letra de una cadena
*/
function capitalizarTexto(texto) {
    if (!texto) return '';
    return texto
        .toLowerCase()
        .split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');
}