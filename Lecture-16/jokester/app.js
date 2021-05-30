const colors = require('colors');
const jokes = require('give-me-a-joke');


jokes.getRandomCNJoke (function(joke) {
    console.log(joke.rainbow);
});