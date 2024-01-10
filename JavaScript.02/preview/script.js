"use strict";

const box = document.querySelector(".box");
const block = document.querySelector(".block");

console.log(block);
/* if (block) {
    console.log(block.textContent);
} */
console.log(block?.textContent);
console.log(1 + 3);

const userData = {
    name: "ivan",
    age: null,
    say: function () {
        console.log("hello");
    }
};
const userData2 = null;

userData.say();
userData.hey?.();

/* if (userData && userData.skills && userData.skills.js) {
    console.log(userData.skills.js);
}
 */

console.log(userData.skills?.js);
console.log(userData2?.skills?.js);

/* const obj = {
    "name": "test",
    [Symbol("id")]: 1,
    getId: function () {
        return this[id];
    }
}; */

/* obj[id] = 1; */
/* console.log(obj.getId()); */
/* console.log(obj[Object.getOwnPropertySymbols(obj)[0]]); */

/* for (let value in obj) console.log(value); */

const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol.for("id")]: 123
};

myAwesomeDB.id = "12312321";
console.log(myAwesomeDB[Symbol.for("id")]);
console.log(myAwesomeDB);
myAwesomeDB[Symbol.for("id")] = 1234;
console.log(myAwesomeDB[Symbol.for("id")]);

const user = {
    name: "alex",
    surname: "Smith",
    birthday: "20/04/1993",
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

Object.defineProperty(user, "birthday", { writable: false });
console.log(Object.getOwnPropertyDescriptor(user, "name"));
Object.defineProperty(user, "name", { writable: false });

//writable
//enumerable
//configurable