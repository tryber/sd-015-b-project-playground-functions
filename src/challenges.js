// Desafio 1
// 1 - Crie uma função usando o operador &&.
function compareTrue(par1, par2) {
  if (par1 && par2) {
    return true;
  }
  return false;
}
console.log(compareTrue(false, true));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));

// Desafio 2
// 2 - Crie uma função que calcule a área de um triângulo
function calcArea(base, height) {
  let resultado = (base * height) / 2;

  return resultado;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
// 3 - Crie uma função que divida a frase
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
// 4 - Crie uma função que use concatenação de strings
function concatName(arrayString) {
  let concatString = arrayString[arrayString.length - 1] + ', ' + arrayString[0];
  return concatString;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
// 5 - Crie uma função que calcule a quantidade de pontos no futebol
function footballPoints(wins, ties) {
  let vitoria = 3;
  let empate = 1;
  let total = (vitoria * wins) + (empate * ties);
  return total;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

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
