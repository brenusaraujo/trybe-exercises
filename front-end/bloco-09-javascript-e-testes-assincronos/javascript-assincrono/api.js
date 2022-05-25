const API_URL = `https://api.coincap.io/v2/assets`

const fetchCoin = async() => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  await fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      const tenthCoins = data.data.filter(coin => Number(coin.rank) <= 10).sort((a, b) => b.rank - a.rank);
      const await loop = () => {
        for (let index = tenthCoins.length - 1; index >= 0; index -= 1) {
          let teste = document.createElement('li');
          teste.innerText = `${tenthCoins[index].name} (${tenthCoins[index].symbol}): ${tenthCoins[index].priceUsd}`;
          document.getElementById('coinsCointainer').appendChild(teste);
        }
      };

      loop();


    });

};

window.onload = () => fetchCoin();
