/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
// Desafio 1
function compareTrue(a, b) {
  return a === true && b === true;
}
console.log(compareTrue(true, true));
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
} console.log(splitSentence('turma trybecat!'));

// Desafio 4
function concatName(array) {
  return array[0] + array[array.length - 1];
} array = ['Lucas, ', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(array));

// Desafio 5
function footballPoints() {
  return (wins * 3) + ties;
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
