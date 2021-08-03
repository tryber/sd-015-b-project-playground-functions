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
let myArray = [10, 2, 3, 10, 8, 1, 12]
console.log(highestCount(myArray))

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
