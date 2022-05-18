const books = [{
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function authorBornIn1947() {
  return books.find(number => number.author.birthYear === 1947).author.name;
}

console.log(authorBornIn1947());

function smallerName() {
  return books.sort((a, b) => a.name.length - b.name.length)[0].name;
}

console.log(smallerName());

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  return books.find(book => book.name.length === 26).name;
}

console.log(getNamedBook());
console.log(expectedResult);

function booksOrderedByReleaseYearDesc() {
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}
console.log(booksOrderedByReleaseYearDesc())


function everyoneWasBornOnSecXX() {
  return books.every(age => age.author.birthYear <= 2000);
}
console.log(everyoneWasBornOnSecXX());



function someBookWasReleaseOnThe80s() {
  return books.some(release => release.releaseYear <= 1990);
}
console.log(someBookWasReleaseOnThe80s());

function authorUnique() {
  // return books.every((a, b) => a.author.birthYear === b.author.birthYear);
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear) &&
      (bookSome.author.name !== book.author.name)));

}

console.log(authorUnique());