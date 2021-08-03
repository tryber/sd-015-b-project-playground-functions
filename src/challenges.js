// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
       return true
    } else {
       return false
  }
}

// Desafio 2
function calcArea(base, altura) {
  let soma = (base * altura) / 2;
  return soma;
}

// Desafio 3
function splitSentence(str) {
  let separa = str.split(" ");
  return separa;
}

// Desafio 4
function concatName(str) {
  return ((str[str.length-1]) + ", " + (str[0]));
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = (wins * 3);
  let empates = ties;
  let pontos = (vitorias + empates);
  return pontos;
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
