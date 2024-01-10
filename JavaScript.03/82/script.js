"use strict";

const persone = {
    name: "alex",
    tel: "+345672348",
    parents: {
        mom: "Olga",
        dad: "Mike"
    }
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = "ann";
console.log(persone);
console.log(clone);