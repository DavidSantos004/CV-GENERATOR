function validarNumero(input) {
    // Reemplaza cualquier carácter que no sea un número con una cadena vacía
    input.value = input.value.replace(/[^0-9]/g, '');
}

document.addEventListener("DOMContentLoaded", function() {
const emailInput = document.getElementById("email_input");
const mensajeError = document.getElementById("mensajeError");

if (emailInput && mensajeError) {
    emailInput.addEventListener("input", function() {
        const email = emailInput.value;
        if (isValidEmail(email)) {
            mensajeError.textContent = "Dirección de correo electrónico válida.";
            mensajeError.style.color = "green";
        } else {
            mensajeError.textContent = "Dirección de correo electrónico no válida.";
            mensajeError.style.color = "red";
        }
    });
} else {
    console.error("Los elementos no se encontraron en el DOM.");
}

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}
});