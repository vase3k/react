"use strict";

const str = "test";
const arr = [1, 2, 4];

console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str);

let fruit = "some fruit";
console.log(fruit.indexOf("a"));

const logg = "hello world";
/* console.log(logg.slice(6, 11));
console.log(logg.slice(6));
console.log(logg.slice(-5, -1)); */

/* console.log(logg.substring(6, 11)); */

console.log(logg.substr(6, 5));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));