// Desafio 1
function compareTrue(a, b) {
if (a === true && b === true) {
  return true;
}
else {
  return false;
}
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(initialString) {
  let resultArray = initialString.split(' ');
  return resultArray;
}

// Desafio 4
var initialArray = ["Rodrigo", "Matheus", "Alex"];

function concatName(initialArray) {
  let initialArrayLenght = initialArray.lenght;
  let resultString = (initialArray[initialArrayLenght - 1], initialArray[0]);
  console.log(resultString);
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

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
