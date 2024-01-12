"use script";

// filter

/* const names = ["ivan", "ann", "ksenia", "voldemart"];

const shortNames = names.filter(function (name) {
    return name.length < 5;
});

console.log(shortNames); */

// map

/* let answers = ["IvAn", "AnnA", "Hello"];

answers.map(item => item.toLowerCase());

console.log(answers); */

//every/some

/* const some = [4];

console.log(some.some(item => typeof (item) === "number")); */

//reduce

/* const arr = [3, 4, 54, 67, 2, 5, 7, 8];
const res = arr.reduce((sum, current) => sum + current, 10);
console.log(res); */

const obj = {
    ivan: "persone",
    ann: "persone",
    dog: "animal",
    cat: "animal",
};

const newArr = Object.entries(obj)
    .filter(item => item[1] === "persone")
    .map(item => item[0]);

console.log(newArr);