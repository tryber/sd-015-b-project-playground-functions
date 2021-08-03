// Desafio 1
function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(str) {
  let strToArr = str.split(" ");
  return strToArr;
}

// Desafio 4
function concatName(arrOfStr) {
  let first = arrOfStr[0];
  let last = arrOfStr[arrOfStr.length-1];
  let str = [last, first];
  return str.join(", ");
}

// Desafio 5
function footballPoints(wins, ties) {
  let gameWins = wins * 3;
  let gameTies = ties;
  let points = gameWins + gameTies;
  return points;
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
