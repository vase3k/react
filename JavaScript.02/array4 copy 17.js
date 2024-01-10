"use strict";

const user = {
    name: "alex",
    surname: "Smith",
    birthday: "20/04/1993",
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

console.log(Object.getOwnPropertyDescriptor(user, "name"));

//writable
//enumerable
//configurable