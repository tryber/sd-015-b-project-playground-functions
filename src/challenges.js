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
  return `${arrayStr[arrayStr.length - 1]}, ${arrayStr[0]}`;
}

console.log('4° Último Item, Primeiro Item:',
  concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;
  let result = wins + ties;
  return result;
}

console.log('5° Resultado: ', footballPoints(14, 8));

// Desafio 6
function highestCount(arrayVa) {
  let highestNumber = arrayVa[0];
  let counter = 0;

  for (let index = 0; index < arrayVa.length; index += 1) {
    if (arrayVa[index] > highestNumber) {
      highestNumber = arrayVa[index];
    }
  }

  for (let index = 0; index < arrayVa.length; index += 1) {
    if (highestNumber === arrayVa[index]) {
      counter += 1;
    }
  }
  return counter;
}
console.log(highestCount([-1, -2, -2]));

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
