"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};
const copy = obj; //Ссылка

copy.a = 10;

console.log(copy);
console.log(obj);

function copy2(mainObj) {
    let objCopy = {};
    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy2(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);
console.log(Object.assign(numbers, add));

const oldArray = ["a", "b", "c", [1, 2, 3, 4, 5]];
const newArray = oldArray.slice();
newArray[1] = "asdasda";
console.log(newArray);
console.log(oldArray);

const video = ["youtube", "vimeo", "rutube"],
    blogs = ["wordpress", "livejournal", "blogger"],
    internet = [...video, ...blogs, "vk", "facebook"];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 4, 6, ["s"]];
/* log(...num); */
const newAarray = [...num];
newAarray[3][0] = "gvo";
console.log(newAarray);
console.log(num);

const q = {
    one: 1,
    two: 2
};

const newObj = { ...q };

console.log(newObj);

const someString = "This is some strange string";

function reverse(str) {
    if (typeof (str) !== "string") return "Ошибка!";
    return str.split("").reverse().join("");
}
reverse(someString);

const baseCurrencies = ["USD", "EUR"]; //bank1
const additionalCurrencies = ["UAH", "RUB", "CNY"]; //bank2

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) return "Нет доступных валют";
    let acc = "Доступные валюты:\n";
    for (let currency of arr) {
        if (currency !== missingCurr) {
            acc += `${currency}\n`;
        }
    }
    return acc;
}
console.log(availableCurr(["UAH", "RUB", "CNY"], "CNY"));
