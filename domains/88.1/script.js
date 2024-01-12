"use strict";

const films = [
    {
        name: "Titanic",
        rating: 9
    },
    {
        name: "Die hard 5",
        rating: 5
    },
    {
        name: "Matrix",
        rating: 8
    },
    {
        name: "Some bad film",
        rating: 4
    }
];

function setFilmsIds(arr) {
    return arr.map((item, i) => {
        item.id = i + 1;
        return item;
    });
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(item => item.id || item.id === 0);
}

console.log(checkFilms(tranformedArray));

function showGoodFilms(arr) {
    return arr.filter(x => x.rating >= 8);
}
function showListOfFilms(arr) {
    return arr.map(x => x.name).reduce((x, y) => `${x}, ${y}`);
}