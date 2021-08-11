// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return(true);
  } else {
    return(false);
  }
}

// Desafio 2
function calcArea(altura, base) {
  return (altura * base) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName(lista) {
  nomeConcatenado = lista[0] + ", " + lista[lista.length - 1];
  return nomeConcatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  pontos = wins * 3;
  pontos = pontos + ties;
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
