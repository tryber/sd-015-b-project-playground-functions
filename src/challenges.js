// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayDeString = string.split(' ');

  return arrayDeString;
}

// Desafio 4
function concatName(array) {
  let ultimaString = array.pop();
  let primeiraString = array.shift();
  let resultado = ultimaString + primeiraString;

  return resultado;
}console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties;
  let sumsPoints = winsPoints + tiesPoints;

  return sumsPoints;
}console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let numeroAtual = array[0];
  let numeroVezes = 0;
  let numeroVezesMaisRepetido = 0;
  for (let mudancaDeNum = 0; mudancaDeNum < array.length; mudancaDeNum += 1) {
    numeroAtual = array[mudancaDeNum];
    for (let comparacao = 0; comparacao < array.length; comparacao += 1) {
      if (numeroAtual === array[comparacao]) {
        numeroVezes += 1;
        if (numeroVezes > numeroVezesMaisRepetido) {
          numeroVezesMaisRepetido = numeroVezes;
        }
      }
    }
    numeroVezes = 0;
  }
  return numeroVezesMaisRepetido;
}console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

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
