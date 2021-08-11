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
function highestCount(numeros) {
  numeroMaisAlto = 0
  quantasVezesRepetiu = 0
  
  for (index1 = 1; index1 < numeros.length; index1 ++) {
    if (numeros[index1] > numeros[index1 - 1]) {
      numeroMaisAlto = numeros[index1]
    }
  }
  
  for (index2 = 0; index2 < numeros.length; index2 ++) {
    if (numeroMaisAlto === numeros[index2]) {
      quantasVezesRepetiu = quantasVezesRepetiu + 1;
    }
  }
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
