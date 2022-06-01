const API_URL = `https://api.coincap.io/v2/assets`

const fetchUSDtoBRL = async() => {
  const URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`;
  const response = await fetch(URL);
  const data = await response.json();
  return data.usd.brl;
}

const fetchCoin = async() => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }
  const usdValue = await fetchUSDtoBRL();
  try {
    const response = await fetch(API_URL, myObject);
    const data = await response.json();
    const tenCurrencies = await data.data.filter(coin => Number(coin.rank) <= 10).sort((a, b) => b.rank - a.rank);
    for (let index = tenCurrencies.length - 1; index >= 0; index -= 1) {
      let teste = document.createElement('li');
      teste.innerText = `${tenCurrencies[index].name} (${tenCurrencies[index].symbol}): R$ ${tenCurrencies[index].priceUsd*usdValue}`;
      document.getElementById('coinsCointainer').appendChild(teste);
    }
  } catch (error) {
    console.log(`something went wrong. ${error}`);
  }

}


// const fetchCoin = async() => {
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };
//   await fetch(API_URL, myObject)
//     .then(response => response.json())
//     .then(data => {
//       const tenthCoins = data.data.filter(coin => Number(coin.rank) <= 10).sort((a, b) => b.rank - a.rank);
//       const loop = () => {
//         for (let index = tenthCoins.length - 1; index >= 0; index -= 1) {
//           let teste = document.createElement('li');
//           teste.innerText = `${tenthCoins[index].name} (${tenthCoins[index].symbol}): ${tenthCoins[index].priceUsd}`;
//           document.getElementById('coinsCointainer').appendChild(teste);
//         }
//       };

//       loop();


//     });

// };





window.onload = () => { fetchCoin(), fetchUSDtoBRL() };
