const btn = document.getElementById('btn');
const h1 = document.querySelector('h1');
// console.dir(btn);


// btn.onclick = function () {
//     console.log("YOU CLICKED ME!!");
//     console.log("");
// }


// Not a good way for handeling events

// function shout() {
//     console.log("Shout!!");
// }

// function scream() {
//     console.log("Scream");
// }

// btn.onclick = shout;
// btn.onclick = scream;


// ---------------------------Better way of handeling events-----

function shout() {
    console.log("Shout!!");
}

function scream() {
    console.log("Scream");
}


// h1.addEventListener('mouseenter', () => {
//     console.log("Hover!!!");
//     console.log("")
// })


btn.addEventListener('click', shout);
btn.addEventListener('click', scream);

