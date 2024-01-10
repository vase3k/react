"use strict";

function User(name, id) {
    this.name = name;
    this.id = id;
    this.humain = true;
    this.hello = function () {
        console.log(`hello ${this.name}`);
    };
}

User.prototype.exit = function () {
    console.log(`user ${this.name} have left`);
};

const ivan = new User("ivan", 28);
const alex = new User("alex", 30);

ivan.exit();

ivan.hello();
alex.hello();
console.log(ivan);
console.log(alex);