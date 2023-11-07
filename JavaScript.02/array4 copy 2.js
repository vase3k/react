"use strict";
const numberOfFilms = +prompt("how many movies you watched", "12");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* for (let i = 0; i < 2; i++) {
    const a = prompt("you last watched movie", ""),
        b = prompt("how you will score", "7");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log(personalMovieDB);
    } else {
        console.log("error");
        i--;
    }
} */

/* let i = 0;
while (i < 2) {
    const a = prompt("you last watched movie", ""),
        b = prompt("how you will score", "7");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        console.log("error");
        i--;
    }
    i++;
} */

let i = 0;
do {
    const a = prompt("you last watched movie", ""),
        b = prompt("how you will score", "7");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        console.log("error");
        i--;
    }
    i++;
} while (i < 2);



console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    alert("few movies");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("you are classic");
} else if (personalMovieDB.count >= 30) {
    alert("vi kinoman");
} else {
    alert("error");
}

