const express = require('express');
const app = express();
const session = require('express-session');


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));


app.get('/viewcount', (req, res) => {
    
    if (req.session.count) {
        req.session.count += 1;
    }
    else {
        req.session.count = 1;
    }

    res.send(`You have viewed this page ${req.session.count} time`);
})

app.get('/register', (req, res) => {
    
    const { username } = req.query;

    req.session.username = username;


    res.redirect('/greet');
});

app.get('/greet', (req, res) => {
    
    const { username } = req.session;

    res.send(`Welcome Back ${username}`);
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})