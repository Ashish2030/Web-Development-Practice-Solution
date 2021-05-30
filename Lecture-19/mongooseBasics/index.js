const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/moviesDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected Successfully");
        console.log("CONNECTION OPEN");
    })
    .catch(err => {
        console.log("OH NO ERROR");
        console.log(err);
    })


const movieSchema = new mongoose.Schema({
    title: String,
    score: Number,
    year: Number,
    watched:Boolean
});

const Movie = mongoose.model('Movie', movieSchema);

// const starwars = new Movie({ title: 'Starwars', score: 8, year: 2010, watched: false });

// Creating using mongoose 

// Movie.insertMany([
//     { title: 'Superman', score: 9, year: 2012, watched: true },
//     { title: 'Ironman', score: 7, year: 2008, watched: true },
//     { title: 'Intersteller', score: 8, year: 2014, watched: false },
//     { title: 'Martian', score: 6.5, year: 2016, watched: true },
//     { title: 'Wondor Women', score: 7.5, year: 2007, watched: false },
// ])
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR");
//         console.log(err);
//     })


// Finding using mongoose 



// Movie.find({})
//     .then(m => {
//         for (let movie of m) {
//             console.log(movie.title);
//        }
//     })

// Movie.find({ year: { $in: [2007, 2008, 2012] } })
//     .then((m)=> {
//         for (let movie of m) {
//             console.log(`${movie.title}-${movie.year}`);
//         }
//     })







