document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'blue'
document.getElementById('primeiroFilhoDoFilho').innerText = 'Teste';
document.getElementById('pai').firstChild;
document.getElementById('elementoOndeVoceEsta').previousElementSibling;
document.getElementById('elementoOndeVoceEsta').nextSibling;
document.getElementById('elementoOndeVoceEsta').nextElementSibling;
document.getElementById('pai').children[2];

let sibling = document.querySelector('#elementoOndeVoceEsta');

let siblingTest = document.createElement("p");

siblingTest.innerHTML = "Breno araújo de matos";

sibling.appendChild(siblingTest);