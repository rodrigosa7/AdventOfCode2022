const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

const lines = input.split('\n');

const parseLines = (tree, command) => {
    console.log("command", command)
    if(command.startsWith('$ cd ')) {
        const dir = command.slice(5);
        if(dir === '/') {
            tree.paths = ['']
        } else if(dir === '..') {
            tree.paths.pop();
        } else {
            const lastDir = tree.paths[tree.paths.length - 1];
            tree.paths.push(lastDir + '/' + dir);
        }
    } else if(command.startsWith('dir ')) {
        const dir = command.slice(4);
        const lastDir = tree.paths[tree.paths.length - 1];
        const path = lastDir + '/' + dir;
        tree.dirs[path] = 0;
    } else if(!command.startsWith('$')) {
        const parts = command.split(' ');
        const size = +parts[0];
        for(const path of tree.paths) {
            tree.dirs[path] += size;
        }
    }
    return tree;
}
const solution = (lines) => {
    const finalTree = lines.reduce(parseLines, { paths: [], dirs: { '': 0 } });
    console.log(finalTree);

    let sum = 0;
    const unused = 70000000 - finalTree.dirs[''];
    const gap = 30000000 - unused;
    let selected = Number.MAX_SAFE_INTEGER;

    for(const size of Object.values(finalTree.dirs)) {
        if(size <= 100000) {
            sum+= size;
        }
        if(size > gap && selected > size) {
            selected = size;
        }
    }
    console.log(sum);
    console.log(selected)
}
solution(lines);