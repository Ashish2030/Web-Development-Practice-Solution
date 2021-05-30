const express = require('express');
const app = express();



app.get("/", (req, res) => {
    res.send("CONNECTED");
})

// path parameters in express 

app.get("/r/:subredit", (req, res) => {
    
    const { subredit } = req.params;
    res.send(`This is a ${subredit} SUBREDIT`);
})

app.get('/r/:name/:id', (req, res) => {

    const { name, id } = req.params;


    res.send(`Hey ${name} your id is ${id}`);
})


// query String 

app.get("/search", (req, res) => {
    const { q } = req.query;
    console.log(req.query);
    res.send(`You are searching for ${q}`);
})





app.listen(8080, () => {
    console.log('Server running on port 8080');
})
