// Desafio 1
function compareTrue(a, b) {
  let resposta;

  if (a === b) {
    resposta = true;
  } else {
    resposta = false;
  }

  return resposta;
}

// Desafio 2
function calcArea(base, heigth) {
  let Area;

  Area = (base * heigth) / 2;

  return Area;
}

// Desafio 3
function splitSentence(array) {
  let arraySeparada = [];

  // Usa método nativo split, conforme pode ser verificado em
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

  arraySeparada = array.split(' ');

  return arraySeparada;
}

// Desafio 4
function concatName(arrayStrings) {
  let nomeConcat = '';

  nomeConcat = `${arrayStrings[arrayStrings.length - 1]}, ${arrayStrings[0]}`;

  return nomeConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos;

  pontos = 3 * wins + ties;

  return pontos;
}

// Desafio 6
// Sub-função para desafio 6
function encontraMaior(numeros) {
  // Encontra maior número
  let maior = numeros[0];
  for (let i = 1; i < numeros.length; i += 1) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }
  return maior;
}
function highestCount(numeros) {
  let contaMaior = 0;
  let maior;

  maior = encontraMaior(numeros);

  // Conta quantas vezes esse número está lá

  for (let i = 0; i < numeros.length; i += 1) {
    if (maior === numeros[i]) {
      contaMaior += 1;
    }
  }
  return contaMaior;
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
