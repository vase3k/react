"use strict";

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calcArea() {
        return this.width * this.height;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`text: ${this.text}, color: ${this.bgColor}`);
    }
}


const div = new ColoredRectangleWithText(25, 10, "hello", "red");
div.showMyProps();
console.log(div.calcArea());

/*     const square = new Rectangle(20, 30);
    const long = new Rectangle(30, 100);

console.log(long.calcArea());
console.log(square.calcArea()); */