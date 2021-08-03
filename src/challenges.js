// Desafio 1
function compareTrue() {
  let isEven = ((num1 % 2)=== 0) && ((num2 % 2)=== 0);
  return isEven;
// seu código aqui
}

// Desafio 2
function calcArea() {
  let area = ((base * height)/2);
  return area;  
  // seu código aqui
}

// Desafio 3
function splitSentence(frase) {
  let palavras = frase;
  return palavras.split(' ');
  // seu código aqui
  }

// Desafio 4
function concatName(array) {
  let {length, 0: first, [length-1]: last} = array;
  return last+first;
  // seu código aqui
}

// Desafio 5
function footballPoints(jogos) {
  let pontos = ((wins*3)+(ties*1));
  return pontos;
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
