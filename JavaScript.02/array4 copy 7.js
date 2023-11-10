"use strict";

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function () {
        console.log(options.width);
    }
};

options.makeTest();

const { border, bg, } = options.colors;

for (let key in options) {
    if (typeof (options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`property ${i} ${options[key][i]}`);
        }
    } else console.log(`property ${key} ${options[key]}`);
}

console.log(Object.keys(options).length);