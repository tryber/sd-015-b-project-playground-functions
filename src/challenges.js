// Desafio 1
function compareTrue(booleanPar1, booleanPar2) {
  if (booleanPar1 && booleanPar2 === true) {
    return true;
  }
  return false;
}
console.log('1° Resultado: ', compareTrue(true, true));

// Desafio 2
function calcArea(base, heigth) {
  let triArea = (base * heigth) / 2;
  return triArea;
}

console.log('2° Resultado: ', calcArea(51, 1));

// Desafio 3

function splitSentence(string) {
  const splitStr = string.split(' ');
  return splitStr;
}
console.log('3° Divide a senteça: ', splitSentence('go Trybe'));

// Desafio 4

function concatName(arrayStr) {
  return `${arrayStr[0]}, ${arrayStr[arrayStr.length - 1]}`;
}

console.log('4° Último Item, Primeiro Item:',
  concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints() {
  
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
