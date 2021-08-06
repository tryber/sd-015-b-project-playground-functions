/* eslint-disable max-lines-per-function */
// Desafio 1
function compareTrue(n, n2) {
  if (n && n2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(' ');
  return resultado;
}

// Desafio 4
function concatName(array) {
  let resultado;
  resultado = `${array[array.length - 1]}, ${array[0]}`;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

function highestCount(num) {
  // verificar qual o maior número da array e retornar quantas vezes ele se repete.
  // let test;
  let repeticaoDoMaiorNumero = 0;
  let maiorNumero = num[0];
  for (let index = 0; index < num.length; index += 1) {
    if (num[index] > maiorNumero) {
      maiorNumero = num[index];
      repeticaoDoMaiorNumero = 0;
    }
    if (num[index] === maiorNumero) {
      repeticaoDoMaiorNumero += 1;
    }
  }

  return repeticaoDoMaiorNumero;
}

// Desafio 7
function catAndMouse() {

}

// Desafio 8
function fizzBuzz() {

}

// Desafio 9
function encode() {

}
function decode() {

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
