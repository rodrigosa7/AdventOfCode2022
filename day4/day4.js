const fs = require('fs')
const path = require('path')

const file = fs.readFileSync(path.join(__dirname,'input.txt'), 'utf8')

const pairs = file.split('\n').map((string) => string.split(','))

const validatePairs = (n1, n2, n3, n4) => {
    return (n1 <= n3 && n2 >= n4 || n1 >= n3 && n2 <= n4)
}
const validatePairs2 = (n1, n2, n3, n4) => {
    return (n2 >= n3 && n4 >= n1)
}

let count = 0;
let count2 = 0;

pairs.map((pair) => {
    const [n1, n2] = pair[0].split('-').map((string) => +string)
    const [n3, n4] = pair[1].split('-').map((string) => +string)
    if (validatePairs(n1, n2, n3, n4)) {
        count++
    }
    if (validatePairs2(n1, n2, n3, n4)) {
        count2++
    }
})
console.log("Pairs that one range fully contains another: ", count)
console.log("Pairs that range overlaps: ", count2)


