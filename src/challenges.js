// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  } if (value1 === false && value2 === false) {
    return false;
  }
  return false;
}
compareTrue(false, true);

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let resultado = string.split(' ');
  return resultado;
}
splitSentence('Go trybe');
// Desafio 4
function concatName(array) {
  // seu código aqui
  let resultado = `${array[array.length - 1]}, ${array[0]}`;
  return resultado;
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let resultado = (wins * 3) + ties;
  return resultado;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  for (let key1 = 0; key1 < array.length; key1 += 1) {
    let maiorNumero = 0;
    let vezesRepete = 0;
    // let vezesRepete = 0;
    for (let key2 = 0; key2 < array.length; key2 += 1) {
      if (array[key1] >= array[key2]) {
        maiorNumero += 1;
      }
      if (array[key1] === array[key2]) {
        vezesRepete += 1;
      }
    }
    if (maiorNumero === array.length) {
      return vezesRepete;
    }
  }
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
