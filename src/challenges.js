// Desafio 1
function compareTrue(x, y) {
  // seu código aqui
  return x && y;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = base * height / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let splittedSentence = sentence.split(" ");
  return splittedSentence;
}

// Desafio 4
function concatName(names) {
  // seu código aqui
  firstName = names[0];
  lastName = names[names.length - 1];
  return lastName + ", " + firstName;
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
