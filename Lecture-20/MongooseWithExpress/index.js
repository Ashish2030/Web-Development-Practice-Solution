const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seedDB');
const methodOverride = require('method-override');


mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("DB Not Connected");
        console.log(err);
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
mongoose.set('useFindAndModify', false);


// seedDB();

const Product = require('./models/products');


app.get("/", (req, res) => {
    res.send("Connected");
})



// Get All the products

app.get('/products', async(req, res) => {

    const products = await Product.find({});

    res.render('products/index',{products:products});
})  


// Getting a form for adding new product
app.get('/products/new', (req, res) => {
    res.render('products/new');
})



// Creating new product inside the db
app.post('/products', async(req, res) => {
    const product = await Product.create(req.body)
    res.redirect("/products");
})


// Show particular products
app.get('/products/:id', async(req, res) => {
    
    const product = await Product.findById(req.params.id);

    res.render('products/show',{product:product})
})

// Get form for edit product

app.get('/products/:id/edit', async(req, res) => {
    
    const foundProduct = await Product.findById(req.params.id);

    res.render('products/edit',{product:foundProduct})
})


// Making a PATCH Request
app.patch('/products/:id', async(req, res) => {

    // const foundProduct = await Product.findById(req.params.id);

    const updatedProduct = await Product.findOneAndUpdate({ _id: req.params.id },req.body);
   
    res.redirect('/products')
})


// Delete particular product
app.delete('/products/:id', async(req, res) => {
    
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    res.redirect('/products');
})

app.listen(3000, () => {
    console.log("Server Started at localhost:3000..");
})