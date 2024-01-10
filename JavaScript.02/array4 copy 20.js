"use strict";

/* function sumOfDifferences(arr) {
    let acc = 0;
    if (arr.length === 0) return 0;
    let reverseredArr = arr.reverse();
    for (let i = 0; i < reverseredArr.length - 1; i++) {
        acc += reverseredArr[i] - reverseredArr[i + 1];
    } return acc;
} */



function sumOfDifferences(arr) {
    if (arr.length === 0) return 0;
    arr.reverse();
    return arr[0] - arr[arr.length - 1];
}

const arr2 = [-17, 3, -18, -3, 7, 18, -12, 17, -16, -1, -1, 3, -14, 15];

console.log(sumOfDifferences(arr2));



