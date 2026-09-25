document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const inputCorreo = document.getElementById('loginCorreo');
    const inputPassword = document.getElementById('loginPassword');

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

    // Val. en tiempo real
    inputCorreo.addEventListener('input', () => {
        validarCampo(inputCorreo, validarCorreo(inputCorreo.value), 'err-login-correo');
    });

    inputPassword.addEventListener('input', () => {
        validarCampo(inputPassword, validarPassword(inputPassword.value), 'err-login-password');
    });

    // Evento Submit
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const vCorreo = validarCampo(inputCorreo, validarCorreo(inputCorreo.value), 'err-login-correo');
        const vPass = validarCampo(inputPassword, validarPassword(inputPassword.value), 'err-login-password');

        if (!vCorreo || !vPass) {
            alert('Credenciales no válidas. Revisa los requisitos de los campos.');
            return;
        }

        alert('¡Inicio de sesión exitoso!');
    });
});