const teste = (nome) => {
  return { nome, email: `${nome.toLowerCase().split(' ').join('_')}@trybe.com` }
}
const newEmployees = () => {
  const employees = {
    id1: teste('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: teste('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: teste('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());

const result = (number, random) => {
  if (number === random) {
    return true
  }
  return false;
};

const fuc = (number, result) => {
  const teste = Math.floor(Math.random() * 6);
  if (result(number, teste)) {
    return `Parabéns, você acertou`
  }
  return `Tente novamente.`
};

console.log(fuc(2, result));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswer = (answer, rights) => {
  let sum = 0;
  for (let index = 0; index < answer.length; index += 1) {
    if (answer[index] !== rights[index]) {
      sum -= 0.5;
    } else {
      sum += 1;
    }
  }
  return sum;
}

const test = (RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswer) => {
  return `Você fez ${checkAnswer(RIGHT_ANSWERS, STUDENT_ANSWERS)} pontos.`;
}

console.log(test(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswer));