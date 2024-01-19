"use strict";

const data = [
    {
        id: "box",
        tag: "div"
    },
    {
        id: "",
        tag: "nav"
    },
    {
        id: "circle",
        tag: "span"
    }
];

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);

        if (!blockObj.id) throw new SyntaxError(`data under number ${i + 1} have no unique id`);
        block.setAttribute("id", blockObj.id);
        document.body.append(block);
    });
} catch (e) {
    if (e.name === "SyntaxError") {
        console.log(e.message);
    } else throw e;
}