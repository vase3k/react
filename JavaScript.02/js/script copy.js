"use strict";

const box = document.getElementById("box"),
    btns = document.getElementsByTagName("button"),
    circles = document.getElementsByClassName("circle"),
    wrapper = document.querySelector(".wrapper"),
    hearts = wrapper.querySelectorAll(".heart"),
    oneHeart = wrapper.querySelector(".heart");


box.style.backgroundColor = "blue";
box.style.width = "500px";

box.style.cssText = "background-color: blue; width: 500px";
btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = "blue";
}

hearts.forEach(item => {
    item.style.backgroundColor = "gray";
});

const div = document.createElement("div");
/* const text = document.createTextNode("i was here"); */

div.classList.add("black");
/* wrapper.append(div);
wrapper.prepend(div);
hearts[0].before(div);
hearts[0].after(div);
circles[0].remove();
hearts[0].replaceWith(circles[0]); */

/* wrapper.appendChild(div);
wrapper.insertBefore(div, hearts[2]); */

/* wrapper.removeChild(hearts[1]); */
/* wrapper.replaceChild(circles[0], hearts[0]); */

wrapper.after(div);
div.innerHTML = "<h1>hello world</h1>";
/* div.textContent = "hello"; */

div.insertAdjacentHTML("afterend", "<h2>hello</h2>");


