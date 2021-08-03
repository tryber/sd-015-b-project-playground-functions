// Desafio 1
// função deve receber 2 valores bolleanos
// retorna true se ambos forem verdadeiros
// retorna false se um dos 2 forem falsos
// // retorna false se os 2 forem falsos
function compareTrue(cor1,cor2) {
  if (cor1 === true && cor2 === true) {
  return true;
} else {
  return false;
}
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  
  return result
  }

// Desafio 3
// cria a função q deve receber uma string
function splitSentence(frase) {
  let partsOfString = frase.split([' ']);

  return partsOfString;
}

// Desafio 4
function concatName() {
  // seu código aqui
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
