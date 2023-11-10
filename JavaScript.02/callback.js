"use strict";

function first() {
    //do something
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`ya ychu ${lang}`);
    callback();
}

function done() {
    console.log("ya ebal");
}

learnJS("govno", done);