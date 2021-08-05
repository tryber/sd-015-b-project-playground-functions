// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

compareTrue(false, true);

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

calcArea(51, 1);

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  let firstName = array[0];
  let lastName = array[array.length - 1];
  return `${lastName}, ${firstName}`;
}

let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(array));

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
}

console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(arrayNumber) {
  let highestNumber = arrayNumber[0];
  let count = 0;
  for (let num of arrayNumber) {
    if (num > highestNumber) {
      highestNumber = num;
      count = 0;
    }
    if (num === highestNumber) {
      count += 1;
    }
  }
  return count;
}

let numberList = [0, 4, 4, 4, 9, 2, 1];
console.log(highestCount(numberList));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  if (distancia2 < distancia1) {
    return 'cat2';
  } if (distancia1 < distancia2) {
    return 'cat1';
  } return 'os gatos trombam e o rato foge';
}

console.log(catAndMouse(10, 5, 15));

// Desafio 8
// eslint-disable-next-line complexity
function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isFizz(num, arrayFizzBuzz) {
  let divisibleThree = isDivisible(num, 3);
  let divisibleFive = isDivisible(num, 5);
  if (divisibleThree && !divisibleFive) {
    arrayFizzBuzz.push('fizz');
  }
}

function isBuzz(num, arrayFizzBuzz) {
  let divisibleThree = isDivisible(num, 3);
  let divisibleFive = isDivisible(num, 5);
  if (divisibleFive && !divisibleThree) {
    arrayFizzBuzz.push('buzz');
  }
}

function isFizzBuzz(num, arrayFizzBuzz) {
  let divisibleThree = isDivisible(num, 3);
  let divisibleFive = isDivisible(num, 5);
  if (divisibleThree && divisibleFive) {
    arrayFizzBuzz.push('fizzBuzz');
  }
}
function isBug(num, arrayFizzBuzz) {
  let divisibleThree = isDivisible(num, 3);
  let divisibleFive = isDivisible(num, 5);
  if (!divisibleThree && !divisibleFive) {
    arrayFizzBuzz.push('bug!');
  }
}
function fizzBuzz(arrayFizzBuzz) {
  let result = [];
  for (let pos of arrayFizzBuzz) {
    let num = pos;
    isFizz(num, result);
    isBuzz(num, result);
    isFizzBuzz(num, result);
    isBug(num, result);
  }
  return result;
}

let fizzBuzzArray = [2, 15, 7, 9, 45];
console.log(fizzBuzz(fizzBuzzArray));

// Desafio 9
function encode(msg) {
  let replaceMsg = msg.replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
  return replaceMsg;
}
function decode(msg) {
  let replaceMsg = msg.replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return replaceMsg;
}

console.log(encode('hi there!'));
console.log(decode('h3 th2r2!'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
