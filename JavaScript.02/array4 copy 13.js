"use strict";

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};
function isBudgetEnough(data) {
    let acc = 0;
    data.shops.forEach((element) => {
        const m3 = element.width * element.length * data.height;
        console.log(element.width, element.length, data.height);
        acc += m3;
    });
    if (data.budget >= acc * data.moneyPer1m3) {
        return "Бюджета достаточно";
    } else return "Бюджета недостаточно";
}
isBudgetEnough(shoppingMallData);

const students = ["Peter", "Andrew", "Ann", "Mark", "Josh",
    "Sandra", "Cris", "Bernard", "Takesi", "Sam"];

function sortStudentsByGroups(arr) {
    arr.sort();
    let result = [];
    for (let i = 0; i < 3; i++) {
        result.push(arr.splice(0, 3));
    }
    result.push("Оставшиеся студенты:");
    if (arr.length === 0) {
        result[3] += " -";
    } else {
        for (let j = 0; j < arr.length; j++) {
            if (j === 0) {
                result[3] += ` ${arr[j]}`;
            } else result[3] += `, ${arr[j]}`;
        }
    }
    return result;
}
sortStudentsByGroups(students);