for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}
/* 
*
**
***
****
*****
****** 
*/

let result = "";
const length2 = 7;
for (let i = 1; i < length2; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += "\n";
}
console.log(result);

first: for (let i = 0; i < 3; i++) {
    console.log(`first level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`third level: ${k}`);
        }
    }
}

for (let i = 5; i <= 10; i++) {
    console.log(i);
}

for (let i = 20; i >= 10; i--) {
    if (i == 13) break;
    console.log(i);
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;
while (i <= 16) {
    if (i % 2 === 0) {
        i++;
    } else {
        console.log(i);
        i++;
    }
}

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } else continue;
}

(() => {
    const arrayOfNumbers = [];
    for (let i = 0; i <= 5; i++) {
        arrayOfNumbers[i] = i + 5;
    }
    console.log(arrayOfNumbers);
    return arrayOfNumbers;
})();

const arr = [3, 5, 8, 16, 20, 23, 50];
const result2 = [];

i = 0;
do {
    result2[i] = arr[i];
    i++;
} while (i <= arr.length - 1);


