const cnv = document.getElementById("cnv");
const ctx = cnv.getContext("2d");
const curTetromino = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
]
ctx.scale(20, 20);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, cnv.width, cnv.height);

function drawTetromino(curTetromino) {
    curTetromino.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0) {
                ctx.fillStyle = 'red';
                ctx.fillRect(x, y, 1, 1);
            }
        });
    });
}

drawTetromino(curTetromino);