const button = document.getElementById('button');
const myform = document.getElementById('my_form');
const agree = document.getElementById('agree');
button.addEventListener('click', function(event) {
    event.preventDefault();
    myform.reset(); //reseta o form
})

function enableSubmit() {
    const button = document.querySelector('#button');
    const agree = document.querySelector('#agree');
    button.disabled = !agree.checked; //aqui, se o agree tiver marcado, o botao será desabilitado. se nao tiver marcado, sera habilitado.
}
window.onload = function() {
    const agreement = document.getElementById('agree');
    agreement.addEventListener('change', enableSubmit);
};