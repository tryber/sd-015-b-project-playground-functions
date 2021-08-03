// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === param2 && param1 === false) {
    return false;
  }
  if (param1 !== param2) {
    return false;
  }
  if (param1 === param2 && param1 === true) {
    return true;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let separate = string.split(' ');
  return separate;
}

// Desafio 4
function concatName(array) {
  let primeiro = array[0];
  let ultimo = array[array.length - 1];
  let concat = ultimo.concat(', ', primeiro);

  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;

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
