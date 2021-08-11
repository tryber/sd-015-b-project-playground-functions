// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
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
  let nomeConcatenado = lista[lista.length - 1] + ", " + lista[0];
  return nomeConcatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3;
  pontos = pontos + ties;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  let numeroMaisAlto = 0;
  let quantasVezesRepetiu = 0;
  
  for (index1 = 0; index1 < numeros.length; index1 ++) {
    if (numeroMaisAlto < numeros[index1]) {
      numeroMaisAlto = numeros[index1];
    }
  }
  
  for (index2 = 0; index2 < numeros.length; index2 ++) {
    if (numeroMaisAlto === numeros[index2]) {
      quantasVezesRepetiu = quantasVezesRepetiu + 1;
    }
  }
  return quantasVezesRepetiu;
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
