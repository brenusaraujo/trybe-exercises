// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maçã', 'pêra', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['suco de laranja', 'leite condensado', 'granola'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));

const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

// 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const together = {...user, ...jobInfos };

const { name, age, nationality, profession, squad, squadInitials } = together;

//  "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

console.log(together);