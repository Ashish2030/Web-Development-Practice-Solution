const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');
const blogRoutes = require('./routes/blog');


mongoose.connect('mongodb://localhost:27017/my-blog-app',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false
    })
    .then(() => {
        console.log("Database Connected");
    })
    .catch(err => {
        console.log(err);
        console.log("DB Connection Failed");
    });


app.use(express.json());

// seedDB();


app.use(blogRoutes);




app.listen(8000, () => {
    console.log("Server Running on Port 8000");
})