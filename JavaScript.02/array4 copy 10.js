"use strict";

let str = "some";
let str_obj = new String(str);

console.log(typeof (str));
console.log(typeof (str_obj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armour: 100,
    sayHello: () => console.log("hello")
};

const john = Object.create(soldier);

/* john.__proto__ = soldier; */

john.sayHello();