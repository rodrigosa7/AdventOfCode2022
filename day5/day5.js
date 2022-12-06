const fs = require('fs')
const path = require('path')

const file = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')


const lines = file.split('\n')
const parsedCrates = lines.slice(0, lines.indexOf('') - 1);

const moves = lines.slice(lines.indexOf('') + 1, lines.length);
const parsedMoves = moves.map((move) => move.split(' ')).map(arr => arr.filter(Number)).map(arr => arr.map(string => +string))

const part1 = (moves) => {
    let hash = {}
    for (let i = 0; i < parsedCrates.length; i++) {
        let z = 1;
        for (let j = 1; j < parsedCrates[i].length; j += 4) {
            if (parsedCrates[i][j] !== ' ') {
                hash[z] ? hash[z].push(parsedCrates[i][j]) : hash[z] = [parsedCrates[i][j]]
            }
            z++;
        }
    }
    let crates = Object.values(hash).map(arr => arr.reverse())
    for (let i = 0; i < moves.length; i++) {
        const [quantity, from, to] = [moves[i][0], moves[i][1] - 1, moves[i][2] - 1]
        for (let j = 0; j < quantity; j++) {
            let removedItem = crates[from].pop();
            crates[to].push(removedItem)
        }
    }
    console.log("Solution part 1", crates.map(arr => arr.pop()).join(''))
}
const part2 = (moves) => {
    let hash = {}
    for (let i = 0; i < parsedCrates.length; i++) {
        let z = 1;
        for (let j = 1; j < parsedCrates[i].length; j += 4) {
            if (parsedCrates[i][j] !== ' ') {
                hash[z] ? hash[z].push(parsedCrates[i][j]) : hash[z] = [parsedCrates[i][j]]
            }
            z++;
        }
    }
    let crates = Object.values(hash).map(arr => arr.reverse())
    for (let i = 0; i < moves.length; i++) {
        const [quantity, from, to] = [moves[i][0], moves[i][1] - 1, moves[i][2] - 1]
        const arr = []
        for (let j = 0; j < quantity; j++) {
            let removedItem2 = crates[from].pop();
            arr.push(removedItem2)


        }
        crates[to] = crates[to].concat(arr.reverse())
    }
    console.log("Solution part 2", crates.map(arr => arr.pop()).join(''))
}
part1(parsedMoves)
part2(parsedMoves)



