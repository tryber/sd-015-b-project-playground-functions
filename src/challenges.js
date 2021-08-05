// Desafio 1
function compareTrue(valor1, valor2) {
  let resultado = valor1 === true && valor2 === true;
  return resultado
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(arrayNomes) {
  let primeiroNome = arrayNomes[0];
  let ultimoNome = arrayNomes[arrayNomes.length - 1];
  return ultimoNome + ', ' + primeiroNome;
}

// Desafio 5
function footballPoints(wins, ties) {
  let Points = (wins * 3) + (ties * 1);
  return Points;
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
