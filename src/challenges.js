// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(parametro) {
  return parametro.split(' ');
}

// Desafio 4
function concatName(arrayTeste) {
  let novaLista =
    arrayTeste[arrayTeste.length - 1] + ', '.concat(arrayTeste[0]);
  return novaLista;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties;
  return resultado;
}

// Desafio 6

let contador = 0;
function highestCount(number) {
  let maiorNumero = Math.max(...number);
  for (let index = 0; index < number.length; index++) {
    if (number[index] === maiorNumero) {
      return contador++;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 > cat2 && cat1 > mouse) {
    return 'cat2';
  } else if (cat2 > cat1 && cat2 > mouse) {
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat1';
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
