// Tic-Tac-Toe
let b = [[0,0,0], [0,0,0], [0,0,0]];
function show(b){
    return(`\nSTEP  - ${step+1}\nTURN - ${step % 2 == 0 ? 'X' : 'O'}\n   0:1:2:\n0: ${b[0]}\n1: ${b[1]}\n2: ${b[2]}`);
}
function gameCheck(b){
    switch (true) {
        case (b[0][0]==b[0][1] && b[0][0] == b[0][2] && b[0][1]==b[0][2]) : {if(b[0][0] == 1 && b[0][1] == 1 && b[0][2] == 1){return b[0][0];}}
        case (b[1][0]==b[1][1] && b[1][0] == b[1][2] && b[1][1]==b[1][2]) : {if(b[1][0] == 1 && b[1][1] == 1 && b[1][2] == 1){return b[1][0];}}
        case (b[2][0]==b[2][1] && b[2][0] == b[2][2] && b[2][1]==b[2][2]) : {if(b[2][0] == 1 && b[2][1] == 1 && b[2][2] == 1){return b[2][0];}}
        case (b[0][0]==b[1][0] && b[0][0] == b[2][0] && b[1][0]==b[2][0]) : {if(b[0][0] == 1 && b[1][0] == 1 && b[2][0] == 1){return b[0][0];}}
        case (b[0][1]==b[1][1] && b[0][1] == b[2][1] && b[0][1]==b[2][1]) : {if(b[0][1] == 1 && b[0][1] == 1 && b[2][1] == 1){return b[0][1];}}
        case (b[0][2]==b[1][2] && b[0][2] == b[2][2] && b[0][2]==b[2][2]) : {if(b[0][2] == 1 && b[0][2] == 1 && b[2][2] == 1){return b[0][2];}}
        case (b[0][0]==b[1][1] && b[0][0] == b[2][2] && b[1][1]==b[2][2]) : {if(b[0][0] == 1 && b[1][1] == 1 && b[2][2] == 1){return b[0][0];}}
        case (b[0][2]==b[1][1] && b[0][2] == b[2][0] && b[1][1]==b[2][0]) : {if(b[0][2] == 1 && b[1][1] == 1 && b[2][0] == 1){return b[0][2];}}
        case (b[0][0]==b[0][1] && b[0][0] == b[0][2] && b[0][1]==b[0][2]) : {if(b[0][0] == 1 && b[0][1] == 1 && b[0][2] == 1){return b[0][0];}}
        
        case (b[0][0]==b[0][1] && b[0][0] == b[0][2] && b[0][1]==b[0][2]) : {if(b[0][0] == 2 && b[0][1] == 2 && b[0][2] == 2){return b[0][0];}}
        case (b[1][0]==b[1][1] && b[1][0] == b[1][2] && b[1][1]==b[1][2]) : {if(b[1][0] == 2 && b[1][1] == 2 && b[1][2] == 2){return b[1][0];}}
        case (b[2][0]==b[2][1] && b[2][0] == b[2][2] && b[2][1]==b[2][2]) : {if(b[2][0] == 2 && b[2][1] == 2 && b[2][2] == 2){return b[2][0];}}
        case (b[0][0]==b[1][0] && b[0][0] == b[2][0] && b[1][0]==b[2][0]) : {if(b[0][0] == 2 && b[1][0] == 2 && b[2][0] == 2){return b[0][0];}}
        case (b[0][1]==b[1][1] && b[0][1] == b[2][1] && b[0][1]==b[2][1]) : {if(b[0][1] == 2 && b[0][1] == 2 && b[2][1] == 2){return b[0][1];}}
        case (b[0][2]==b[1][2] && b[0][2] == b[2][2] && b[0][2]==b[2][2]) : {if(b[0][2] == 2 && b[0][2] == 2 && b[2][2] == 2){return b[0][2];}}
        case (b[0][0]==b[1][1] && b[0][0] == b[2][2] && b[1][1]==b[2][2]) : {if(b[0][0] == 2 && b[1][1] == 2 && b[2][2] == 2){return b[0][0];}}
        case (b[0][2]==b[1][1] && b[0][2] == b[2][0] && b[1][1]==b[2][0]) : {if(b[0][2] == 2 && b[1][1] == 2 && b[2][0] == 2){return b[0][2];}}
        case (b[0][0]==b[0][1] && b[0][0] == b[0][2] && b[0][1]==b[0][2]) : {if(b[0][0] == 2 && b[0][1] == 2 && b[0][2] == 2){return b[0][0];}}
        default: for(let i = 0; i < b.length; i++){
                 if(b[i].includes(0)){
                    return -1;
                 }
            } 
            return 0;
        }
}
function setPos(b, x, y){
    if(b[x][y] == 0){
        if(step % 2 == 0){
            b[x][y] = 1;
        } else {
            b[x][y] = 2;
        } 
        step++;
    } else {
        return -1;
    }
}
let step = 0;
let X;
let y;

function game() {
    do {
        alert( 'Hello! Lets play Tic-Tac-Toe!');
        do{
            if(gameCheck(b) == -1) {
                for(let j = 0; j < 2; j++){
                    if(j == 0){
                        x = prompt(`Game board: ${show(b)}\n Enter the X coordinates`);
                    } else {
                        y = prompt(`Game board: ${show(b)}\n Enter the y coordinates`);
                    }
                }
                if(x >= 0 && x <= 2 && y >= 0 && y <= 2){
                    setPos(b,x,y);
                } else {
                    alert('You can enter the numbers only from 0 to 2!');
                }
            } else {
                break;
            }
        }while(true);
        if(gameCheck(b) == 1) {
            alert( 'X win'); 
        } else if(gameCheck(b) == 2) {
            alert('O win');
        } else if (gameCheck(b) == 0){
            alert('draw');
        }  
    }while(confirm('Do you want to play again?'))
}

