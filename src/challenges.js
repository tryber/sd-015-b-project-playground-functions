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
  let numeroMaior = 0;
  for (index1 = 0; index1 < numeros.length; index1 ++) {
    if (numeroMaior < numeros[index1]) {
      numeroMaior = numeros[index1];
    }
  }
  let contagem = 0;
  for (index2 = 0; index2 < numeros.length; index2 ++) {
    if (numeroMaior === numeros[index2]) {
      contagem ++;
    }
  }
  return contagem;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;

  if (cat1 === cat2) {
    return "os gatos trombam e o rato foge"
  } else if (distanciaCat1 < distanciaCat2){
    return "cat1"
  } else {
    return "cat2"
  }
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
