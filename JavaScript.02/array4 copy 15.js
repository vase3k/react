"use strict";

/* let number = 5; debugger;

function logNumber() {
    let number = 4; debugger;
    console.log(number);
}

number = 6;

logNumber(); debugger;
 */

function createCounter() {
    let counter = 0;
    const myFunction = function () {
        counter = counter + 1;
        return counter;
    };
    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

console.log("ab".charCodeAt(1));

function foo(a, b) {
    const [, asdas] = a;
    const { eng } = b;

    return `${asdas} ${eng}`;
}

const result = foo(["Hello", "Привет"], { ru: "Мир", eng: "World" });

console.log(typeof (NaN));

console.log([] + false - null + true);
let y = 1; let x = y = 2; console.log(x);
console.log(1 + 2);
console.log("1"[0]);
console.log(2 && 1 && null && 0 && undefined);
console.log(!!(0 && 2));
console.log(0 && 3);
console.log(+"infinity");
console.log();