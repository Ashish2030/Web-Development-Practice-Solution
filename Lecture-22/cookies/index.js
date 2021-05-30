const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


app.use(cookieParser())


app.get('/greet', (req, res) => {

    const { name } = req.cookies;

    console.log(req.cookies);

    res.send(`Hey there ${name}`);
})


app.get('/setname', (req, res) => {
    
    res.cookie('name', 'Kartik');
    res.cookie('mode', 'dark');

    res.send("Send you a Cookie");
});



app.listen(3000, () => {
    console.log("Server running on port 3000");
})