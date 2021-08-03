// Desafio 1

function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}
// console.log(compareTrue(1 === 1, 'casa' === 'casa'));

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}
console.log(calcArea(10, 50));

// calcArea(51, 1);

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
}
console.log(splitSentence('foguete'));

// Desafio 4

function concatName(array) {
  let ultimo = array[array.length - 1];
  let primeiro = array[0];
  let soma = ultimo + ' ' + primeiro;
  return soma;
}
console.log(concatName(['a', 'b', 'c']));

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
