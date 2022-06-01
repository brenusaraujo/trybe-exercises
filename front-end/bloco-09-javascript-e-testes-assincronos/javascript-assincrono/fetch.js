const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value));
// }

// fetchJoke();

const fetchProducts = async(query) => {
  const urltest = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;

  const response = await fetch(urltest);
  const results = await response.json();
  return results;

};

fetchProducts(computer);
