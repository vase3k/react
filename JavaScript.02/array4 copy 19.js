"use strict";
function deepCount(a, acc = 0) {
    for (let value in a) {
        acc++;
        if (Array.isArray(a[value])) return deepCount(a[value], acc);
    } return acc;
}

const arr1 = [1, 5, 3]; //3
const arr2 = ["1", 5, "3", ["10"]]; //5
const arr3 = [1, 2, [3, 4, [5]]]; //7
const arr4 = [[[[[[[[[]]]]]]]]]; //8

const result = deepCount(arr3);

console.log(result);