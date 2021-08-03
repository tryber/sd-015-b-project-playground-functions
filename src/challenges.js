// Desafio 1
function compareTrue(firstValue, secondValue) {
  if (firstValue && secondValue === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let first = array[0];
  let last = array.pop();
  let lastFirst = last.concat(', ', first);
  return lastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let largest = array[0];
  let count = 0;
  for (let item of array) {
    if (item > largest) {
      largest = item;
      count = 1;
    } else if (item === largest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  let cat1Cat2 = distanceCat1 - distanceCat2;
  let result = null;
  if (cat1Cat2 > 0) {
    result = 'cat2';
  } else if (cat1Cat2 < 0) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function checkDivision(number) {
  if (number % 15 === 0) {
    return 'fizzBuzz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  return 'bug!';
}
function addToArray(array, number) {
  array.push(number);
}
function fizzBuzz(array) {
  let zArray = [];
  for (let item of array) {
    addToArray(zArray, checkDivision(item));
  }
  return zArray;
}

// Desafio 9
function encode(string) {
  let myCode = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let newString = string;
  for (let letter of newString) {
    if (Object.keys(myCode).includes(letter)) {
      newString = newString.replace(letter, myCode[letter]);
    }
  }
  return newString;
}
function decode(string) {
  let myCode = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let newString = string;
  for (let char of newString) {
    if (Object.keys(myCode).includes(char)) {
      newString = newString.replace(char, myCode[char]);
    }
  }
  return newString;
}

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
