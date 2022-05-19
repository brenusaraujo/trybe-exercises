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

function formatedBookNames() {
  // const array = [];
  // // const booksNames = objeto.map(item => item.name);
  // // const booksGenre = objeto.map(item => item.genre);
  // // const booksAuthor = objeto.map(item => item.author.name);
  // for (let index = 0; index < objeto.map(item => item.author.name).length; index += 1) {
  //   array.push(`${objeto.map(item => item.name)[index]} - ${objeto.map(item => item.genre)[index]} - ${objeto.map(item => item.author.name)[index]}`)
  // }
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

  // return array;
}

console.log(formatedBookNames());

function nameAndAge() {
  return books.map((value) => ({ age: value.releaseYear - value.author.birthYear, author: value.author.name }));
}

console.log(nameAndAge());

function fantasyOrScienceFiction() {
  return books.filter(genre => genre.genre === 'Fantasia' || genre.genre === 'Ficção Científica');
}

console.log(fantasyOrScienceFiction());

function oldBooksOrdered() {
  return books.filter(book => (2022 - book.releaseYear) >= 60).sort((a, b) => a.releaseYear - b.releaseYear);

}

console.log(oldBooksOrdered());

function fantasyOrScienceFictionAuthors() {
  return fantasyOrScienceFiction().map(value => value.author.name).sort();
}

console.log(fantasyOrScienceFictionAuthors());

function oldBooks() {
  return books.filter(book => (new Date().getFullYear() - book.releaseYear) >= 60).map(nome => nome.name);
}

console.log(oldBooks());

function authorWith3DotsOnName() {
  return books.filter(book => book.author.name[1] === `.` && book.author.name[4] === `.` && book.author.name[7] === `.`)[0].name;
}

console.log(authorWith3DotsOnName());