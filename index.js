// Encuenta al elemento HTML (el boton) mediante su ID
const miboton = document.getElementById('miboton');

// Define la función que se ejecutara cuando se haga clic en elboton
function handleClick() {
alert ('¡ Hola ! Has hecho clic en el botón.');

}

miBoton.addEventListener('click', handleClick);
const from = document.getElementById('myForm');
from.addEventListener('submit',function(event) {
    event.preventDefault();
    validateForm();
});
function validateEmail(email){
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}
function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }    
}