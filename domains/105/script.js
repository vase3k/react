"use strict";
try {
    document.querySelector(".active").addEventListener("click", () => {
        console.log("click");
    });
} catch (e) {
    console.log("error");
}