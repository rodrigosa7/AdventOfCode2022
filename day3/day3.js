const fs = require('fs');
const path = require('path');


const file = fs.readFileSync(path.join(__dirname,'input.txt'), 'utf8');

const findRepeatedLetters = (array1, array2) => {
    let letter = '';
    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++) {
            if(array1[i] === array2[j]) {
               letter = array1[i];
                    break;
            }
        }
    }
    return letter;
}

const divideString = (string, index) => {
    return [string.slice(0, index), string.slice(index)];
}

const letters = file.split('\n').map((string) => {
    const [leftSide, rightSide] = divideString(string, string.length/2);
    return findRepeatedLetters(leftSide, rightSide);
})

const finalChars = letters.filter(Boolean)

const finalResult = finalChars.map((char) => {
    const charCode = char.charCodeAt(0);
    return charCode > 96 ? charCode - 96 : charCode - 38;
}).reduce((acc, item) => acc + item, 0);

console.log(finalResult)

let letterBy3 = file.split('\n')
let commonLetters = [];

for(let i = 0; i < letterBy3.length; i+=3) {
    const [line1, line2, line3] = [letterBy3[i].split(''), letterBy3[i+1].split(''), letterBy3[i+2].split('')];
       for(char of line1) {
              if(line2.includes(char) && line3.includes(char)) {
                commonLetters.push(char);
                break;
              }
       }


}
console.log(commonLetters);

const result2 = commonLetters.map((char) => {
    const charCode = char.charCodeAt(0);
    return charCode > 96 ? charCode - 96 : charCode - 38;
}).reduce((acc, item) => acc + item, 0);

console.log(result2)


