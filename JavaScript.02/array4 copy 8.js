"use strict";

const arr = [1, 2, 3, 6, 8];

arr.forEach(function (item, i, vol) {
    console.log(`${item} index of ${i} of array ${vol}`);
});

arr[99] = 0;
console.log(arr.length);

for (let key of arr) {
    console.log(key);
}

arr.pop();
arr.push(10);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let str = "1, 222, 23, 523";
str = str.split(", ").sort((a, b) => b - a);
console.log(str);

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ["ru", "eng"],
        programmingLangs: {
            js: "20%",
            php: "10%"
        },
        exp: "1 month"
    },
    showAgeAndLangs: function (plan) {
        const age = plan.age;
        const languages = plan.skills.languages;
        let acc = `Мне ${age} и я владею языками:`;
        for (let key of languages) {
            acc += ` ${key.toUpperCase()}`;
        }
        return acc;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showProgrammingLangs(plan) {
    let acc = "";
    const programmingLangs = plan.skills.programmingLangs;
    for (let key in programmingLangs) {
        acc += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return acc;
}
console.log(showProgrammingLangs(personalPlanPeter));

function showExperience(plan) {
    const exp = plan.skills.exp;
    return exp;
}
console.log(showExperience(personalPlanPeter));

const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
    let acc = "Семья состоит из:";
    if (arr.length < 1) return acc = "Семья пуста";
    for (let key in arr) {
        acc += ` ${arr[key]}`;
    }
    return acc;
}

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
    for (let key in arr) {
        console.log(arr[key].toLowerCase());
    } return;
}


