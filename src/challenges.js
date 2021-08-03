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
  let resultado = `${ultimaString}, ${primeiraString}`;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties;
  let sumsPoints = winsPoints + tiesPoints;

  return sumsPoints;
}console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  let vezesMaiorNumero = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }
  for (let contador = 0; contador < array.length; contador += 1) {
    if (maiorNumero === array[contador]) {
      vezesMaiorNumero += 1;
    }
  }
  return vezesMaiorNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 != 0) {
    resultado.push('fizz');
  } else if (array[index] % 5 === 0 && array[index] % 3 != 0) {
    resultado.push('buzz');
  } else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
    resultado.push('fizzBuzz');
  } else {
    resultado.push('bug!');
  }
}
return resultado;
} console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let numbers = [1, 2, 3, 4, 5];
  return string.replace('e', '2');
} console.log(encode('hi there!'));

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
