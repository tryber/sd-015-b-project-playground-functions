// Desafio 1
function compareTrue(param1, param2) {
  if(param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura)/2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  let strArray = str.split(' ');
  return strArray;
}

// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length -1];
  return lastItem + ', ' + firstItem;
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
