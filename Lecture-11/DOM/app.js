// select the element
const img = document.querySelector('img');
const h1 = document.querySelector('h1');
// console.log(h1)
// console.log(img);

let isTrue = false;

h1.classList.add('heading')
h1.classList.add('two')

// Manipulating the elements

h1.style.fontSize = '3rem'
h1.style.transition = '1s linear';

setInterval(() => {
    
    if (isTrue) {
        h1.style.color = 'red';
        img.setAttribute('src','https://images.unsplash.com/photo-1459909633680-206dc5c67abb?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    }
    else {
        h1.style.color = 'green';
        img.setAttribute('src','https://images.unsplash.com/photo-1551244072-5d12893278ab?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    }

    isTrue = !isTrue;

}, 2000);

