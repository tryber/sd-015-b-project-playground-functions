// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2)
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(array) {
  let index = array.length
  let list = array[index - 1] + ", " + array[0]
  return list
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3
  let empates = ties
  return (vitorias + empates)
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
