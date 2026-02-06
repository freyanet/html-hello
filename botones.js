const formulario = document.querySelector('form');
const alerta = document.getElementById('mensaje-alerta');
const btnCancel = document.getElementById('btn-cancel');

btnCancel.addEventListener('click', () => {
    formulario.reset(); // Borra los inputs
    alerta.textContent = "Datos borrados correctamente.";
    alerta.className = "alert alert-warning d-block"; // Muestra alerta amarilla
});

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Detiene el envío real para validar
    
    // Verificamos si el formulario es válido según los atributos HTML (como required)
    if (!formulario.checkValidity()) {
        alerta.textContent = "Faltan datos obligatorios por rellenar.";
        alerta.className = "alert alert-danger d-block"; // Alerta roja
    } else {
        alerta.textContent = "¡Datos enviados con éxito!";
        alerta.className = "alert alert-success d-block"; // Alerta verde
    }
});