"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("how many movies you watched", "12");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("how many movies you watched", "12");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("you last watched movie", "").trim(),
            b = prompt("how you will score", "7");
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log(personalMovieDB);
        } else {
            console.log("error");
            i--;
        }
    }
}

/* rememberMyFilms(); */

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("few movies");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("you are classic");
    } else if (personalMovieDB.count >= 30) {
        alert("vi kinoman");
    } else {
        alert("error");
    }
}

/* detectPersonalLevel(); */

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`your favorite genre ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();

function calculateVolumeAndArea(side) {
    if (typeof (side) == "string" || side <= 0 || !Number.isInteger(side)) {
        return "При вычислении произошла ошибка";
    }
    const v = Math.pow(side, 3);
    const s = 6 * Math.pow(side, 2);
    return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
}

calculateVolumeAndArea(5);

function getCoupeNumber(ticket) {
    if (!Number.isInteger(ticket) || typeof (ticket) == "string" || ticket < 0) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    if (ticket === 0 || ticket > 36) {
        return "Таких мест в вагоне не существует";
    }
    return Math.ceil(ticket / 4);
}

console.log(getCoupeNumber("as"));

function getTimeFromMinutes(minutes) {
    if (typeof (minutes) == "string" || !Number.isInteger(minutes) || minutes < 0) {
        return "Ошибка, проверьте данные";
    }
    let hours = "часов";
    let min = "минут";
    const HoursValue = Math.floor(minutes / 60);
    let minutesValue;
    if (minutes < 60) {
        minutesValue = minutes;
    } else minutesValue = minutes % 60;
    //hours
    const dd = HoursValue % 100;
    if ((dd >= 11) && (dd <= 19)) hours = "часов";
    const d = HoursValue % 10;
    if (d == 1) hours = "час";
    if ((d >= 2) && (d <= 4)) hours = "часа";
    //mins
    const mm = minutesValue % 100;
    if ((mm >= 11) && (mm <= 19)) min = "минут";
    const m = minutesValue % 10;
    if (m == 1) min = "минута";
    if ((m >= 2) && (m <= 4)) min = "минуты";

    return `Это ${HoursValue} ${hours} и ${minutesValue} ${min}`;
}
console.log(getTimeFromMinutes(76));

function getNumWord(num, word1, word2, word5) {
    const dd = num % 100;
    if ((dd >= 11) && (dd <= 19))
        return word5;
    const d = num % 10;
    if (d == 1)
        return word1;
    if ((d >= 2) && (d <= 4))
        return word2;
    return word5;
}

console.log(getNumWord(120032, "час", "часа", "часов"));

function findMaxNumber() {
    if (arguments.length < 4) return 0;
    const arr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof (arguments[i]) == "string") return 0;
        arr.push(arguments[i]);
    }
    return Math.max(...arr);
}
console.log(findMaxNumber(11.2, 2.2, "10", 6));

function fib(step) {
    let acc = "";
    let a = 0;
    let b = 1;
    let x;
    if (step === 1) {
        return acc = "0";
    } else if (!Number.isInteger(step) || step === 0 || typeof (step) !== "number") {
        return acc = "";
    } else {
        if (a === 0) acc += `${a}`;
        if (b == 1) acc += ` ${b}`;
        for (let i = 3; i <= step; i++) {
            x = a + b;
            a = b;
            b = x;
            acc += ` ${x}`;
        }
    }
    return acc;
}
console.log(fib(15));
