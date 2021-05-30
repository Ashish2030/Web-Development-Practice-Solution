const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '/public')));

const todoList = ["Go to Gym", "Buy Groceries", "Watch Movies", "Learn Web"];


app.get("/todo", (req, res) => {
    
    if (req.xhr) {
        console.log("AJAX Request(CSR)")
        res.send(todoList);
    } else {
        console.log("SSR");
        res.render('todos',{todoList});
    } 
});


app.post("/todo", (req, res) => {

    if (req.xhr) {
        console.log("AJAX POST REQUEST")
    }

    const todo = req.body.todo;
    todoList.push(todo);
    res.redirect("/todo");
});

app.listen(3000, () => {
    console.log("Server started at PORT 3000..");
})