const btn = document.querySelector('#v2');


function scream() {
    console.log('SCREAM!!!!!!');
}

btn.onclick = scream;


// ---------------------------------------

const divs = document.querySelectorAll('section div');

// divs[0].onclick = function (e) {
//     console.log(e.target);
//     e.target.style.display = 'none';
// }

// divs[1].onclick = function (e) {
//     console.log(e.target);
//     e.target.style.display = 'none';
// }
// divs[2].onclick = function (e) {
//     console.log(e.target);
//     e.target.style.display = 'none';
// }
// divs[3].onclick = function (e) {
//     console.log(e.target);
//     e.target.style.display = 'none';
// }

for (let item of divs) {
    item.onclick = function (e) {
        console.dir(e);
        e.target.style.display = 'none';
    }
}

