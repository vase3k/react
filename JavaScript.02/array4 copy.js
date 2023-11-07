/* const data = [5, 10, "Shopping", 20, "Homework"];
let i = 0;
do {
    if (typeof (data[i]) === "number") {
        data[i] = data[i] * 2;
    } else {
        data[i] = data[i] + " - done";
    }
    i++;
} while (i <= data.length - 1); */

/* const data = [5, 10, "Shopping", 20, "Homework"];
const result = [];

let i = data.length - 1;
while (i >= 0) {
    result.push(data[i]);
    i--;
}
console.log(result); */

const lines = 5;
let result = "";

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < i * 2 + 1; j++) {
        result += "*";
    }
    result += "\n";
}
console.log(result);
