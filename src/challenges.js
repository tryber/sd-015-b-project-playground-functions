// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let divisao = [];
  let palavra = '';

  for (caractere of frase + ' ') {
    if (caractere === ' ') {
      divisao.push(palavra);
      palavra = '';
    } else {
      palavra += caractere;
    }
  }
  return divisao;
}

// Desafio 4
function concatName(lista) {
  // seu código aqui
  let resultado = lista[lista.length - 1] + ', ' + lista[0];
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontosWins = wins * 3;
  return pontosWins + ties;
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
