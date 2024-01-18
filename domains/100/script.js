"use strict";

class User {

    #age;
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    #surname = "vinogradov";

    #say = () => {
        console.log(`user name is ${this.name} ${this.#surname}, age is ${this.#age}`);
    };

    get age1() {
        return console.log(this.#age);
    }

    set age1(age) {
        if (typeof age === "number" && age > 0 && age < 110) {
            this.#say();
        } else {
            console.log("not valid entry");
        }
    }

}

const ivan = new User("ivan", 35);

