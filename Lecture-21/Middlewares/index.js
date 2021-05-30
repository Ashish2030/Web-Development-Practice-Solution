const express = require('express');
const app = express();



app.use((req, res, next) => {
    // req.method = 'GET';
    console.log("First Middleware")
    next();
    console.log("AFTER NEXT INSIDE OF FIRST MIDDLEWARE")
})




// app.use((req, res, next) => {
//     console.log(req.query);

//     const { password } = req.query;

//     if (password === 'orange') {
//         next();
//     }
    
//     res.send("INVALID PASSWORD");
// })

const verify = (req, res, next) => {
    
    const { password } = req.query;
    if (password === 'orange') {
        next();
    }
    res.send("INVALID USER");
}


app.use('/users', function (req, res, next) {
    console.log("THIS IS OUR THIRD MIDDLEWARE");
    next();
})

app.get('/', (req, res) => {
    
    res.send('<h1>Welcome to the Home Page</h1>')
})


app.get('/dogs',verify,(req, res) => {
    res.send('<h1>Woof Woof Woof</h1>')
})



app.listen(3000, () => {
    console.log("Server running at port 3000");
})