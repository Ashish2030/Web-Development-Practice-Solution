const mongoose = require('mongoose');
const Product = require('./models/products');

const arr = [
    { name: "iphone 12", price: 1000000, desc: 'This is the lastest iphone of the iphone series' },
    { name: "Macbook Air", price: 70000, desc: 'Macbook Air is one of the most powerful machine' },
    { name: "Mountain Bike", price: 80000, desc: 'This mountain bike is amazing' },
    { name: "HP Laptop", price: 90000, desc: 'This Laptop has i5 processor' },
    { name: "Coke", price: 30, desc: 'This is the premium product of coca cola' },
    
]


function seedDB() {
    Product.insertMany(arr)
    .then(() => {
        console.log("DATA INSERTED");
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = seedDB;

