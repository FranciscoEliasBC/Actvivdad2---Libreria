document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registroForm');
    const inputNombre = document.getElementById('nombre');
    const inputCorreo = document.getElementById('correo');
    const inputFecha = document.getElementById('fechaNacimiento');
    const inputTelefono = document.getElementById('telefono');
    const inputPassword = document.getElementById('password');

    // Función para mostrar u ocultar errores por campo
    function validarCampo(input, esValido, idError) {
        const spanError = document.getElementById(idError);
        if (!esValido) {
            spanError.style.display = 'block';
            input.classList.add('input-error');
            return false;
        } else {
            spanError.style.display = 'none';
            input.classList.remove('input-error');
            return true;
        }
    }

    // Val. en Tiempo Real 
    inputNombre.addEventListener('input', () => {
        validarCampo(inputNombre, soloLetras(inputNombre.value), 'err-nombre');
    });

    inputCorreo.addEventListener('input', () => {
        validarCampo(inputCorreo, validarCorreo(inputCorreo.value), 'err-correo');
    });

    inputFecha.addEventListener('change', () => {
        validarCampo(inputFecha, esMayorDeEdad(inputFecha.value), 'err-fecha');
    });

    inputTelefono.addEventListener('input', () => {
        validarCampo(inputTelefono, validarLongitud(inputTelefono.value, 10), 'err-telefono');
    });

    inputPassword.addEventListener('input', () => {
        validarCampo(inputPassword, validarPassword(inputPassword.value), 'err-password');
    });

    // Val. formulario 
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const vNombre = validarCampo(inputNombre, soloLetras(inputNombre.value), 'err-nombre');
        const vCorreo = validarCampo(inputCorreo, validarCorreo(inputCorreo.value), 'err-correo');
        const vFecha = validarCampo(inputFecha, esMayorDeEdad(inputFecha.value), 'err-fecha');
        const vTel = validarCampo(inputTelefono, validarLongitud(inputTelefono.value, 10), 'err-telefono');
        const vPass = validarCampo(inputPassword, validarPassword(inputPassword.value), 'err-password');

        
        if (!vNombre || !vCorreo || !vFecha || !vTel || !vPass) {
            alert('Por favor corrige los campos marcados en rojo antes de continuar.');
            return;
        }

        const edadCalculada = calcularEdad(inputFecha.value);
        const nombreFormateado = capitalizarTexto(inputNombre.value);
        const telFormateado = formatearTelefono(inputTelefono.value);

        document.getElementById('modalTextoEdad').innerText = `¡Bienvenido, ${nombreFormateado}! Tu edad es de ${edadCalculada} años.`;
        document.getElementById('modalTextoTel').innerText = `Teléfono registrado: ${telFormateado}`;
        document.getElementById('modalEdad').style.display = 'flex';
    });

    // Redireccion
    document.getElementById('btnIrLogin').addEventListener('click', () => {
        window.location.href = 'login.html';
    });
});