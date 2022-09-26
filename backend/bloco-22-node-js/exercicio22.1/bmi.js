const readline = require('readline-sync');
function imc (w, h) {
  const h2 = h * h
  const test = w / h2
  
  if (test<18.5) {
    console.log('Abaixo do peso (magreza)');
  } else if (test>18.5 && test<24.9){
    console.log('Peso normal')
  } else if (test>25.0 && test<29.9){
    console.log('Acima do peso (sobrepeso)')
  } else if (test>30.0 && test<34.9){
    console.log('Obesidade grau I')
  } else if (test>35.0 && test<39.9){
    console.log('Obesidade grau II')
  } else if (test>40.0){
    console.log('Obesidade graus III e IV')
  } 

  console.log(test);
}

console.log("imc teste");

const height = readline.questionFloat('Digite sua altura: ');
const weight = readline.questionFloat('digite seu peso: ');

imc(weight, height);
