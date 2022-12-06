const fs = require('fs');
const path = require('path');

const dataStream = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')

const checkDifferentChars = (input) => /(.).*\1/.test(input);

const validate = (input, size) => {
    let index = 0;
    for(let i = 0; i < input.length; i++) {
        let maxRange = i + size;
        if(!checkDifferentChars(input.substring(i, maxRange))) {
            index = maxRange;
            break;
        }
    }
    return index
}

console.log(validate(dataStream, 4));
console.log(validate(dataStream, 14));