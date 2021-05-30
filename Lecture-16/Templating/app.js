const express = require('express');
const app = express();
const path = require('path');



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname,'/public')))


const todos = ["Go to Movies","Go to Gym","Buy Groceries","Learn Web"]

app.get('/', (req, res) => {
    res.render('home');
})


app.get('/rand', (req, res) => {

    let num = Math.floor(Math.random() * 10) + 1;

    res.render('random',{randomNum:num,todos:todos});
})

app.listen(3000, () => {
    console.log("Server started at PORT http://localhost:3000");
})