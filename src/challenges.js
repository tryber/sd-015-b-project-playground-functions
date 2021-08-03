// Desafio 1
function compareTrue(param1, param2) {
  let compareTrue2 = false;
  if (param1 === true && param2 === true) {
    compareTrue2 = true;
  } else {
    compareTrue2 = false;
  }
  return compareTrue2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(valor) {
  let split = valor.split(' ');
  return split;
}

// Desafio 4
function concatName(valor) {
  let virgulaEspaco = ', ';
  let concatNames = valor[valor.length - 1] + virgulaEspaco + valor[0];
  return concatNames;
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
