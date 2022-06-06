const cnv = document.getElementById("cnv");
const ctx = cnv.getContext("2d");
ctx.scale(20, 20);
const curTetromino = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
];

function createMatrix(w, h) {
    const matrix = [];
    while(h--) {
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

function draw() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    drawTetromino(player.curTetromino, player.pos);
}

function drawTetromino(curTetromino, offset) {
    curTetromino.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0) {
                ctx.fillStyle = 'red';
                ctx.fillRect(x + offset.x,
                             y + offset.y, 
                             1, 1);
            }
        });
    });
}

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;
function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time

    dropCounter += deltaTime;
    if(dropCounter > dropInterval) {
        player.pos.y++;
        dropCounter = 0;
    }
    draw();
    requestAnimationFrame(update);
}

const arena = createMatrix(12, 20);
console.log(arena);

const player = {
    pos: {x: 5, y: 5},
    curTetromino: curTetromino,
}

document.addEventListener('keydown', event => {
    if (event.keyCode === 37) {
        player.pos.x--;
    } else if (event.keyCode === 39) {
        player.pos.x++;
    } else if (event.keyCode === 40) {
        player.pos.y++;
    }
});

update();