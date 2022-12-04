const fs = require('fs');
const path = require('path');

const file = fs.readFileSync(path.join(__dirname,'input.txt'), 'utf8');
const myMoves = file.split('\n').map((string) => string.split(' ')[1].trim());
const elvesMoves = file.split('\n').map((string) => string.split(' ')[0].trim());

const myMovesScore = {
    'X': 1,
    'Y': 2,
    'Z': 3,
}
const elvesMovesScore = {
    'A': 'rock',
    'B': 'paper',
    'C': 'scissors',
}
const myMovesLetters = {
    'X': 'rock',
    'Y': 'paper',
    'Z': 'scissors',
}
const outcomes = {
    'X': 'lose',
    'Y': 'draw',
    'Z': 'win',
}
let myScore = 0;

for(let i = 0; i < myMoves.length; i++) {
    if (myMovesLetters[myMoves[i]] === elvesMovesScore[elvesMoves[i]]) {
        myScore = myScore + 3 + myMovesScore[myMoves[i]];
    } else if (myMoves[i] === 'X' && elvesMoves[i] === 'C') {
        myScore = myScore + 6 + myMovesScore[myMoves[i]];
    } else if (myMoves[i] === 'Z' && elvesMoves[i] === 'B') {
       myScore = myScore + 6 + myMovesScore[myMoves[i]];
    } else if (myMoves[i] === 'Y' && elvesMoves[i] === 'A') {
        myScore = myScore + 6 + myMovesScore[myMoves[i]];
    } else {
        myScore = myScore + myMovesScore[myMoves[i]];
    }
}

let newScore = 0;
for(let i = 0; i < myMoves.length; i++) {
    switch(outcomes[myMoves[i]]) {
        case 'win':
            newScore = newScore + 6;
            if(elvesMoves[i] === 'A') {
                newScore+=2;
            } else if (elvesMoves[i] === 'B') {
                newScore+=3;
            } else if (elvesMoves[i] === 'C') {
                newScore+=1;
            }
            break;
        case 'draw':
            newScore = newScore + 3;
            if(elvesMoves[i] === 'A') {
                newScore+=1;
            } else if (elvesMoves[i] === 'B') {
                newScore+=2;
            } else if (elvesMoves[i] === 'C') {
                newScore+=3;
            }
            break;
        case 'lose':
            if(elvesMoves[i] === 'A') {
                newScore+=3;
            } else if (elvesMoves[i] === 'B') {
                newScore+=1;
            } else if (elvesMoves[i] === 'C') {
                newScore+=2;
            }
            break;


    }
}

console.log(myScore);
console.log(newScore)