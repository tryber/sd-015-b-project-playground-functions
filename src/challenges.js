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
function highestCount(number) {
  let contador = 0;
  let maiorNumero = Math.max(...number);
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}


//Desafio 7
function catAndMouse(mouse, cat1, cat2) {}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let novaArray = [];

  for (num of arrayNumeros) {
    if (num % 3 === 0 && num % 5 !== 0) {
      novaArray.push('fizz');
    } else if (num % 5 === 0 && num % 3 !== 0) {
      novaArray.push('buzz');
    } else if (num % 5 === 0 && num % 3 === 0) {
      novaArray.push('fizzBuzz');
    } else {
      novaArray.push('bug!');
    }
  }
  return novaArray;
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
