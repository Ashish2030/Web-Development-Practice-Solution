// const data = `{"ticker":{"base":"BTC","target":"USD","price":"57917.33700212","volume":"42841.36930235","change":"21.53585895"},"timestamp":1616131682,"success":true,"error":""}`;

// const parsedData = JSON.parse(data); //parse JSON string into JS Object
// console.log(parsedData.ticker.price);


// oldest way of making request

// const res = new XMLHttpRequest();

// res.onload = function () {
//     console.log("All Done!");
//     const data = JSON.parse(this.responseText);
//     // console.log(this);
//     console.log(data.ticker.price);
// }

// res.onerror = function () {
//     console.log("OH No Error");
//     console.log(this);
// }

// res.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
// res.send();


// fetch ---- promise based

const btn = document.getElementById('btn');
const prices = document.getElementById('prices');


const getPrice = () => {
    fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then((res) => {
        // console.log(res);
        return res.json();
    })
    .then((res) => {
        console.log(res.ticker.price);

        const li = document.createElement('li');
        li.innerText = res.ticker.price;

        prices.append(li);
    })
    .catch((e) => {
        console.log("Error");
        console.log(e);
    })
}



btn.addEventListener('click', (e) => {
    getPrice()
})



