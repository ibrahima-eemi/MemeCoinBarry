// front-end/scripts/index.js
fetch('/api/memecoin')
  .then(response => response.json())
  .then(data => {
    const newsList = document.getElementById('news-list');
    const priceElement = document.createElement('li');
    priceElement.textContent = `Prix : ${data.price} €`;
    newsList.appendChild(priceElement);

    const marketCapElement = document.createElement('li');
    marketCapElement.textContent = `Market Cap : ${data.marketCap} €`;
    newsList.appendChild(marketCapElement);
  })
  .catch(error => console.error('Erreur :', error));