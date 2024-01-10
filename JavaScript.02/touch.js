"use strict";

//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

window.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box");
    box.addEventListener("touchstart", (e) => {
        e.preventDefault();
        console.log("start");
        console.log(e.touches);
    });
    box.addEventListener("touchmove", (e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
    });
    box.addEventListener("touchend", (e) => {
        e.preventDefault();
        console.log("end");
    });
});

//touches

const p = document.querySelectorAll("p");
console.log(p);

function loadScript(src) {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript("recursion.js");
loadScript("touch.js");


