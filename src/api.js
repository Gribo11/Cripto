const API_KEY ='150a768e3981ad0b059312a05f52e66ba0c2516dc14f58c9f176af0b5835e0b2'

export  const loadTikers = tickers =>
fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${tickers.join(',')}&api_key=${API_KEY}`
    ).then(r=> r.json())