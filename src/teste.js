let numberCount = {};
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1];

for (index = 0; index < numbers.length; index += 1) {
    if (numberCount[numbers[index]]) {
        numberCount[numbers[index]] += 1;
    } else {
        numberCount[numbers[index]] = 1;
    }
}

console.log(Object.values(numberCount));