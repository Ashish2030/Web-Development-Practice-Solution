const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = 'yellow';

const H = 735;
const W = 1200;

// size of one cell of snake
const cs = 67;

// Create one empty food object

let food = null;

// creating an snake object 

let score;


const snake = {
    
    init_len: 5,
    direction: 'right',
    cells: [],
    
    createSnake: function () {
        for (let i = 0; i < this.init_len; i++){
            this.cells.push({
                x: i,
                y:0
            })
        }
    },
    drawSnake: function () {
        for (let cell of this.cells) {
            pen.fillRect(cell.x*cs, cell.y*cs, cs-2, cs-2);
        }   
    },
    updateSnake: function () {
        
        let headX = this.cells[this.cells.length - 1].x;
        let headY = this.cells[this.cells.length - 1].y;

        // checking for food collision

        if (food.x == headX && food.y == headY) {
            food = getRandomFood();
            score++;
        } else {
            this.cells.shift();//removing one cell from the begining of cells array
        }


        let nextX, nextY;

        if (this.direction == 'up') {
            nextX = headX;
            nextY = headY - 1;

            if (nextY * cs < 0) {
                pen.fillText("Game Over",50,100)
                clearInterval(id);
            }


        }
        else if (this.direction == 'down') {
            nextX = headX;
            nextY = headY + 1;
            if (nextY * cs > H) {
                pen.fillText("Game Over",50,100)
                clearInterval(id);
            }

        }
        else if (this.direction == 'left') {
            nextX = headX - 1;
            nextY = headY;
            if (nextX * cs < 0) {
                pen.fillText("Game Over",50,100)
                clearInterval(id);
            }
        }
        else {
            nextX = headX + 1;
            nextY = headY;
            if (nextX * cs > W) {
                pen.fillText("Game Over",50,100)
                clearInterval(id);
            }
        }


        // Creating x and y for the next cells after the snake head
       
       


        // Pushing/adding a next cell inside cells array
        this.cells.push({
            x: nextX,
            y:nextY
        })

    }
}



// Init -- used to initlise the game

function init() {
    score = 0;
    snake.createSnake();
    snake.drawSnake();

    food = getRandomFood();

    function keyPressed(e) {
        // console.log("Key Pressed");
        // console.log(e.key);

        if (e.key == 'ArrowUp') {
            snake.direction = 'up';
        }
        else if (e.key == 'ArrowDown') {
            snake.direction = 'down';
        }
        else if (e.key == 'ArrowLeft') {
            snake.direction = 'left';
        }
        else {
            snake.direction = 'right';
        }
        // console.log(snake.direction);
    }

    document.addEventListener('keydown', keyPressed);

}




// draw -- used to draw object on canvas

function draw() {
    pen.clearRect(0, 0, W, H);
    pen.fillStyle = "lightgreen";
    pen.font = "40px sans-serif";
    pen.fillText(`Score: ${score}`, 50, 50);
    pen.fillStyle = 'blue';
    pen.fillRect(food.x * cs, food.y * cs, cs, cs);
    pen.fillStyle = 'yellow';

    snake.drawSnake();

}


// update --update the game object

function update() {
    
    snake.updateSnake();

   
}

// Create random food

function getRandomFood() {
    
    let foodX=Math.round(Math.random()*(W-cs)/cs)
    let foodY=Math.round(Math.random()*(H-cs)/cs)

    const food = {
        x: foodX,
        y:foodY
    }

    return food;
}


// gameLoop

function gameLoop() {
    // console.log("Running..");
    draw();
    update();
}


init();
const id = setInterval(gameLoop, 100);









