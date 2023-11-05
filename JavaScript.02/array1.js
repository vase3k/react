"use strict";

const num = 50;
if (num < 49) {
    console.log("error");
} else if (num > 100) {
    console.log("mnogo");
} else {
    console.log("ok");
}

(num === 50) ? console.log("ok") : console.log("error");

switch (num) {
    case 49:
        break;
    case 100:
        break;
    case 50:
        break;
    default:
        break;
}