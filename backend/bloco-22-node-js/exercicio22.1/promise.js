const readline = require('readline-sync');

const evaluateNumbers = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof (a) !== 'number' || typeof (b) !== 'number' || typeof (c) !== 'number') {
      reject(new Error('Informe apenas números'));
    } else if (c < 50) {
      reject(new Error('Valor muito baixo'));
    }
    else {
      resolve((a + b) * c);
    }
  });
  console.log(promise);
}

const input1 = readline.questionInt('insira o primeiro valor: ');
const input2 = readline.questionInt('insira o segundo valor: ');
const input3 = readline.questionInt('insira o terceiro valor: ');

evaluateNumbers(input1, input2, input3);