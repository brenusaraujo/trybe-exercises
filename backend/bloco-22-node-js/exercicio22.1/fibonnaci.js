const readline = require('readline-sync');

const fibonacci = num => {
  // se o valor passado é ou 0 ou 1, é preciso retornar o valor passado
  if (num < 2) {
    return num
  }
  // aqui entra a recursão propriamente dita
  return fibonacci(num - 1) + fibonacci(num - 2)
}

const consolar = num => {
  if (num<=0) {
    console.log('insira um valor válido')
  } else {
    console.log('esta é sua sequencia de fibonacci');
    for (let index = 1; index < num; index += 1) {
      console.log(fibonacci(index));
    }
  }
}

const input = readline.questionInt('Insira até qual número você deseja sua sequencia de Fibonacci: ');

consolar(input);