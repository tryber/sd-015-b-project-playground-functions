/* eslint-disable max-lines-per-function */
// Desafio 1
function compareTrue(n, n2) {
  if (n && n2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(' ');
  return resultado;
}

// Desafio 4
function concatName(array) {
  let resultado;
  resultado = `${array[array.length - 1]}, ${array[0]}`;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(num) {
  let repeticaoDoMaiorNumero = 0;
  let maiorNumero = num[0];
  for (let index = 0; index < num.length; index += 1) {
    if (num[index] > maiorNumero) {
      maiorNumero = num[index];
      repeticaoDoMaiorNumero = 0;
    }
    if (num[index] === maiorNumero) {
      repeticaoDoMaiorNumero += 1;
    }
  }

  return repeticaoDoMaiorNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  if (distancia1 < distancia2) {
    return 'cat1';
  }
  if (distancia1 > distancia2) {
    return 'cat2';
  }
  if (distancia1 === distancia2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzzTest(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  // eslint-disable-next-line no-else-return
  } else if (number % 3 === 0) {
    return 'fizz';
  } else if (number % 5 === 0) {
    return 'buzz';
  } else {
    return 'bug!';
  }
}

function fizzBuzz(arrayNumbers) {
  let resultado = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    resultado.push(fizzBuzzTest(arrayNumbers[index]));
  }
  return resultado;
}

// Desafio 9
function encode() {

}
function decode() {

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
