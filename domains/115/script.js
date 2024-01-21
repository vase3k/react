"use strict";

setTimeout(() => console.log("timeout"));

Promise.resolve()
    .then(() => console.log("promise"));

queueMicrotask(() => console.log("wow"));

Promise.resolve()
    .then(() => console.log("promise2"));

console.log("code");

// () => {}
// microtsks: then/catch/finally/await
// render
// () => {};
// microtsks: then/catch/finally/await
// render
// () => {};