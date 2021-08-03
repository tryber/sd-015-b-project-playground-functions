// Desafio 1
function compareTrue(primeiroTermo, segundoTermo) {
  if (primeiroTermo === true && segundoTermo === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  let area = base * altura / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
}

// Desafio 4
function concatName(string2) {
  let resultado = `${string2[string2.length - 1]}, ${string2[0]}`;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = 3 * wins + ties;
  return resultado;
}

// Desafio 6
function highestCount(array) {
  let teste = -100;
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > teste) {
      contador = 1;
      teste = array[index];
    } else if (array[index] === teste) {
      contador += 1;
    }
  }
  return contador;
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
