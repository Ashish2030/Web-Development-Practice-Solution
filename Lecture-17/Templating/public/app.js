const h1 = document.querySelector('h1');


h1.addEventListener('mouseenter', (e) => {
    console.log("Hello");
    h1.style.color = 'green';
})

h1.addEventListener('mouseleave', (e) => {
    h1.style.color = 'blue';
})