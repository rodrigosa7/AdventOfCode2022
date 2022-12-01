const fs = require('fs');
const path = require('path');

const file = fs.readFileSync(path.join(__dirname,'input.txt'), 'utf8');
const inputSplit = file.split('\n').map((string) => +string);

const allElves = [];
let elfItems = [];
for (let i = 0; i < inputSplit.length; i++) {
    if (inputSplit[i]) {
        elfItems.push(inputSplit[i]);
    } else {
        allElves.push(elfItems);
        elfItems = [];
    }
}

const orderElves = allElves.map((elfItems) => {
    return elfItems.reduce((acc, item) => acc + item, 0);
}).sort((a, b) => b -a);

const biggestElf = orderElves[0];
const top3Elves = orderElves.slice(0, 3).reduce((acc, item) => acc + item, 0);

console.log("The elf carrying the biggest ammount of calories is: ", biggestElf);
console.log("The top 3 elves are carrying a total of: ", top3Elves);

