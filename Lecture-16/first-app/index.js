const express = require('express');
const app = express();

// app.use((req, res) => {
//     res.send({name:"Audi",color:'black',price:1000000});
// })


// Routing in express

app.post("/cats", (req, res) => {
    res.send('<h1>THIS IS A POST REQUEST,IT IS ALTOGETHER DIFFERNT FROM GET REUQEST</h1>')
})


app.get("/", (req, res) => {
    res.send("THIS IS THE HOME PAGE")
})

app.get('/cats', (req, res) => {
    res.send('<h1>Meowwww</h1>');
})

app.get("/dogs", (req, res) => {
    res.send('<h1>Wooofffff</h1>')
})

app.get("*", (req, res) => {
    res.send("You are requesting a wrong url");
})


app.listen(3000,() => {
    console.log("Server Started at Port 3000");
});