const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = "blue";

const H = 735;
const W = 1100;

// pen.fillRect(50, 50, 400, 100);
// pen.fillStyle ='lightgreen';
// pen.font = '40px sans-serif';
// pen.fillText('We are Learning Canvas', 100, 200);


// initial

let initial_x;
let initial_y;

function init() {
    initial_x = 0;
    initial_y = 50;
}

// draw

function draw() {
    pen.clearRect(0, 0, W, H);
    pen.fillStyle = 'blue';
    pen.fillRect(initial_x,initial_y, 70-2, 70-2);
}


// update

function update() {

    initial_x += 70;

}

// gameLoop

function gameLoop() {
    // console.log("Game Loop Running..");
    draw();
    update();
}

init(); //calling an init function

const id=setInterval(gameLoop, 200)




