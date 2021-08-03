// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2 === true) {
    return true;
  } return false;
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
  // seu código aqui
}

// Desafio 3
function splitSentence(string) {
  let arrayDeStrings = string.split(' ');
  return arrayDeStrings;
  // seu código aqui
}

// Desafio 4
function concatName(array) {
  let resultado = '';
  let primeiroNome = array[0];
  let ultimoNome = array[array.length - 1];
  resultado = `${ultimoNome} ${primeiroNome}`;
  return resultado;
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
