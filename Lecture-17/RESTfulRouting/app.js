const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override')


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

let comments = [

    {   id:uuid(),
        username: "Kartik",
        comment:"This is a comment"
    },
    {
        id:uuid(),
        username: "Cat",
        comment:"Meow Meow Moew"
    },
    {
        id:uuid(),
        username: "Dog",
        comment:"Wooof Wooof wooof woooof"
    },
    {
        id:uuid(),
        username: "Sabeel",
        comment:"Hello There!!"
    },
    {
        id:uuid(),
        username: "Prateek",
        comment:"Hello from the Google"
    },
]



app.get("/", (req, res) => {
    res.send("Connected");
})


// INDEX - route === For displaying all the comments
app.get("/comments", (req, res) => {
    res.render('./comments/index', { comments });
})

// GET the form for new comment
app.get('/comments/new', (req, res) => {
    res.render('./comments/new');
})


//CREATE - sending the comment to server to get saved 
app.post("/comments", (req, res) => {
    const { username, comment } = req.body;
    const id = uuid();
    comments.push({ id, username, comment });
    res.redirect("/comments")
});

// SHOW - show particular comment

app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const fComment = comments.find(c => c.id === id)
    res.render('./comments/show',{fComment})
})


app.get("/comments/:id/edit", (req, res) => {
    const { id } = req.params;
    const fComment = comments.find(c => c.id === id)

    res.render('./comments/edit', { fComment });
})

// UPDATE -Comment ---
app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const fComment = comments.find(c => c.id === id)
    const newCommentText = req.body.comment;
    fComment.comment = newCommentText;
    res.redirect("/comments");
})

// DELETE/DESTROY

app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;
    comments=comments.filter(c => c.id !== id);
    res.redirect("/comments");
})


app.listen(3000, () => {
    console.log("Server Running at port 3000..");
})