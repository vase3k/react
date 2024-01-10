"use strict";

const arr = ["alex", "ann", "oleg", "alex"];
const set = new Set(arr);
set.add("ivan").add("alex");

/* set.delete();
set.has();
set.clear();
set.size; */

//for (let value of set) console.log(value);
set.forEach((value, valueAgaing, set) => {
    console.log(value, valueAgaing);
});
console.log(set.values());

function unique(arr) {
    return Array.from(new Set(arr));
}