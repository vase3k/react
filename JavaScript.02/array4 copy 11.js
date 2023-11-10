"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("you last watched movie", "").trim(),
                b = prompt("how you will score", "7");
            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                this.movies[a] = b;
                console.log(this);
            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            alert("few movies");
        } else if (this.count >= 10 && this.count < 30) {
            alert("you are classic");
        } else if (this.count >= 30) {
            alert("vi kinoman");
        } else {
            alert("error");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(this);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`your favorite genre ${i}`);
            if (genre == "" || genre == null) {
                console.log("re-enter information");
                i--;
            } else this.genres[i - 1] = genre;
        }
        this.genres.forEach(function callEach(item, i) {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    },
    start: function () {
        this.count = +prompt("how many movies you watched", "");
        while (this.count == "" || this.count == null ||
            isNaN(this.count) || !Number.isInteger(this.count)) {
            this.count = +prompt("how many movies you watched", "12");
        }
    },
    toggleVisibleMyDB: function () {
        if (this.privat) {
            return this.privat = false;
        } else return this.privat = true;
    }
};

personalMovieDB.writeYourGenres();