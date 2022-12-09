const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

const grid = input.split('\n').map(line => line.split('').map(char => +char));
const verifyTrees = (grid) => {
    let visibleTrees = grid.length * 2 + (grid.length - 2) * 2;
    let scenicScore = 0;
    for (let i = 1; i <= grid.length - 2; i++) {
        for (let j = 1; j <= grid[i].length - 2; j++) {

            let tree = grid[i][j];
            let leftTrees = grid[i].slice(0, j)
            let rightTrees = grid[i].slice(j + 1, grid[i].length)
            let topTrees = grid.slice(0, i).map(row => row[j])
            let bottomTrees = grid.slice(i + 1, grid.length).map(row => row[j])
            if (leftTrees.every(el => el < tree) || rightTrees.every(el => el < tree) || topTrees.every(el => el < tree) || bottomTrees.every(el => el < tree)) {
                visibleTrees++;
            }

            let scoreLeftTrees = 0;
            let scoreRightTrees = 0;
            let scoreTopTrees = 0;
            let scoreBottomTrees = 0;
            for (let k = leftTrees.length - 1; k >= 0; k--) {
                if (leftTrees[k] >= tree) {
                    scoreLeftTrees++;
                    break;
                } else {
                    scoreLeftTrees++;
                }
            }
            for (let k = 0; k < rightTrees.length; k++) {
                if (rightTrees[k] >= tree) {
                    scoreRightTrees++;
                    break;
                } else {
                    scoreRightTrees++;
                }
            }
            for (let k = topTrees.length - 1; k >= 0; k--) {
                if (topTrees[k] >= tree) {
                    scoreTopTrees++;
                    break;
                } else {
                    scoreTopTrees++;
                }
            }
            for (let k = 0; k < bottomTrees.length; k++) {
                if (bottomTrees[k] >= tree) {
                    scoreBottomTrees++;
                    break;
                } else {
                    scoreBottomTrees++;
                }
            }

            let currentScore = scoreLeftTrees * scoreRightTrees * scoreTopTrees * scoreBottomTrees;
            if (currentScore >= scenicScore) {
                scenicScore = currentScore;
            }
        }


    }
    return scenicScore;
}
console.log(verifyTrees(grid));