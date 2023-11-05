"use strict";

/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

if (hamburger || fries || cola) {
    console.log("ya sit");
} else {
    console.log("net");
}

let johnReport, alexReport, samReport = "govno", mariaReport = "done";

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0); */

/* console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && "sadasdas"); */

/* console.log(hamburger == 2 && fries == 2 && null); */
/* console.log(hamburger && fries);
console.log(NaN || 2 || undefined);
console.log(1 && 2 && 3);
console.log(!1 && 2 || !3);
console.log(null && !3);
console.log(NaN || null || !3 || undefined || 5);
console.log(NaN || null && !3 && undefined || 5); */

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

console.log(hamburger && cola || fries === 3 && nuggets);

if (hamburger && cola || fries === 3 && nuggets) {
    console.log("Done!");
} else console.log("govno");
