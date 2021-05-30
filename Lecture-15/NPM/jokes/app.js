const jokes = require('give-me-a-joke');
const colors = require('colors');

// console.log(jokes);

jokes.getRandomCNJoke((joke) => {
    console.log(joke.rainbow);
})