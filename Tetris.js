let cnv = document.getElementById("cnv");
let ctx = cnv.getContext("2d");
let curTetromino =[[1,0], [0,1], [1,1], [2,1]];

// ctx.strokeRect(100, 100, 100, 100);

for(let i = 11; i < 265; i+= 23){
    for(let j = 9; j < 446; j+= 23)
        ctx.strokeRect(i, j, 23, 23);
}