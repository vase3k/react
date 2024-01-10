"use strict";

function amountOfPages(summary) {
    let acc = "", step;
    for (let i = 1; acc.length < summary; i++) {
        acc += i;
        step = i;
    } return step;
}

function isPangram(string) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
        "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let arr2 = string.toLowerCase().replace(/ /g, "");
    arr2 = Array.from(new Set(arr2)).sort();
    let answer;
    for (let letter of alphabet) {
        if (!arr2.includes(letter)) answer = false;
        else answer = true;
    }
    return answer;
}
isPangram("The quick brown fox jumps over the lazy dog");
