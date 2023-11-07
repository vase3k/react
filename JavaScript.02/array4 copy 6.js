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
        const a = prompt("you last watched movie", ""),
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