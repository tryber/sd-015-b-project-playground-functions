// Desafio 1
function compareTrue(bool1, bool2) {
  let result;
  if (bool1 && bool2) { 
    result = true;
  }
  else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(sentence) {
  let arrOfStrings = sentence.split(' ');
  return arrOfStrings;
}

// Desafio 4
function concatName(arrOfStrings) {
  let concatString = arrOfStrings[arrOfStrings.length -1] + ", " + arrOfStrings[0];
  return concatString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
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
