// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } return false;
}

// Desafio 2;
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(win, ties) {
  return ((win * 3) + (ties * 1))
}

// Desafio 6
function highestCount(numberArray) {
  let counter = 0;
  let higherNumber = numberArray[0];
  
  for (let number of numberArray) {
    if (number > higherNumber) {
    higherNumber = number;
    counter = 1;
    } else if (number === higherNumber) {
    counter += 1;
    }
  }
  return counter;
} 
let numberArray = [0, 0, 0]
console.log(highestCount(numberArray))

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
