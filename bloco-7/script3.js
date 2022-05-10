const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKey = (objeto, chave, valor) => {
  objeto[chave] = valor;
};

addKey(lesson2, 'turno', 'noite');

const keysList = (objeto) => Object.keys(objeto);

const objectLength = (objeto) => Object.key(objeto).length;

const objectKeys = (objeto) => Object.values(objeto);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const getNumberOfStudents = (objeto) => {
  let total = 0;
  const array = Object.keys(objeto);
  for (let index in array) {
    total += objeto[array[index]].numeroEstudantes;
  }
  return total;
};

console.log(getNumberOfStudents(allLessons));

const getValueByNumber = (objeto, number) => Object.values(objeto)[number];