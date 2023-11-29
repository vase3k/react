"use strict";
function hi() {
    console.log("say hi!");
}

hi();

const arr = [1, 14, 4, 30, 54],
    sorted = arr.sort(compareNum);

function compareNum(a, b) {
    a = 4, b = 14;
    return a - b;
}

console.log(sorted);