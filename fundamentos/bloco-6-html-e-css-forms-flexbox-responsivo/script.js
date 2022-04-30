const button = document.getElementById('button');
const myform = document.getElementById('my_form');
const agree = document.getElementById('agree');

function enableSubmit() {
    const button = document.querySelector('#button');
    const agree = document.querySelector('#agree');
    button.disabled = !agree.checked; //aqui, se o agree tiver marcado, o botao será desabilitado. se nao tiver marcado, sera habilitado.
}

function textInputValidation() {
    const email = document.querySelector('#email').value.length;
    const invalidEmail = email < 10 || email > 50;

    const name = document.querySelector('#fname').value.length;
    const invalidName = name < 10 || name > 40;

    const aboutme = document.querySelector('#aboutme').value.length;
    const invalidAboutMe = aboutme > 500;

    if (invalidEmail || invalidName || invalidAboutMe) {
        return alert('Dados inválidos');
    } else {
        return alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
}
button.addEventListener('click', function(event) {
    event.preventDefault();
    myform.reset(); //reseta o form
    textInputValidation(); //valida o form
})

window.onload = function() {
    const agreement = document.getElementById('agree');
    agreement.addEventListener('change', enableSubmit);
};