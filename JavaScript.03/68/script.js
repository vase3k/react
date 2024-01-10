"use strict";

const now = new Date(1704549057392);
new Date.parse("2020-05-01");
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());

console.log(now.getTimezoneOffset());
console.log(now.getTime());

console.log(now.setHours(40));
console.log(now);

let start = new Date();

for (let i = 0; i < 1000000000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`cycle finished ${end - start} miliseconds`);