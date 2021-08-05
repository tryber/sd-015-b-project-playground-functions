// Desafio 1
function compareTrue(valor1, valor2) {
  let resultado = valor1 === true && valor2 === true;
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(arrayNomes) {
  let primeiroNome = arrayNomes[0];
  let ultimoNome = arrayNomes[arrayNomes.length - 1];
  return `${ultimoNome}, ${primeiroNome}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let Points = (wins * 3) + (ties * 1);
  return Points;
}

// Desafio 6
function highestCount(arrayNum) {
  let maiorNum = Math.max.apply(null, arrayNum);
  let count = 0;

  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] === maiorNum) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1position = Math.abs(mouse - cat1);
  let cat2position = Math.abs(mouse - cat2);

  if (cat1position < cat2position) {
    return 'cat1';
  } if (cat2position < cat1position) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8

function divisao(numeroArrayFizzBuzz) {
  let resultado = '';
  if (numeroArrayFizzBuzz % 3 === 0 && numeroArrayFizzBuzz % 5 === 0) {
    resultado = 'fizzBuzz';
  } else if (numeroArrayFizzBuzz % 3 === 0) {
    resultado = 'fizz';
  } else if (numeroArrayFizzBuzz % 5 === 0) {
    resultado = 'buzz';
  } else {
    resultado = 'bug!';
  }
  return resultado;
}

function fizzBuzz(arrayFizzBuzz) {
  let array = [];

  for (let index = 0; index < arrayFizzBuzz.length; index += 1) {
    array.push(divisao(arrayFizzBuzz[index]));
  }
  return array;
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
