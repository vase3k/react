"use strict";

const usdCurr = 28;
const discount = 0.9;

function covert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = covert(500, usdCurr);

promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return;
    }
} test();

function donothing() { }
console.log(donothing() === undefined);

function sayHello(name) {
    return name += "привет " + name;
}

function returnNeighboringNumbers(num) {
    const arrayNum = [];
    for (let i = num - 1; i <= num + 1; i++) {
        arrayNum[i - num + 1] = i;
    } return arrayNum;
}
console.log(returnNeighboringNumbers(5));

function getMathResult(num, progression) {
    let result = "";
    if (typeof (progression) != "number" || progression <= 0) return num;
    for (let i = 1; i <= progression; i++) {
        result += num * i;
        if (i < progression) result += "---";
    }
    return result;
}
console.log(getMathResult(10, "sasd"));

