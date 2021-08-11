// Desafio 1
// função deve receber 2 valores bolleanos
// retorna true se ambos forem verdadeiros
// retorna false se um dos 2 forem falsos
// // retorna false se os 2 forem falsos
function compareTrue(cor1, cor2) {
  let compare = cor1 && cor2;
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
// cria a função q deve receber uma string
function splitSentence(frase) {
  let partsOfString = frase.split([' ']);

  return partsOfString;
}

// Desafio 4
function concatName(array) {
  array.reverse();
  return `${array[0]}, ${array[array.length - 1]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let pointsTies = ties;
  let totalPoints = pointsWins + pointsTies;

  return totalPoints;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let saveNum = arrayNumeros[0];
  let contNum = arrayNumeros[0];
  for (let num of arrayNumeros) {
    if (num > saveNum) {
      saveNum = num;
      contNum = 0;
    }
    if (num === saveNum) {
      contNum += 1;
    }
  }
  return contNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado;
  if ((Math.abs(cat1 - mouse)) > (Math.abs(cat2 - mouse))) {
    resultado = 'cat2';
  } else if ((Math.abs(cat2 - mouse)) > (Math.abs(cat1 - mouse))) {
    resultado = 'cat1';
  } else {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}

// Desafio 8

function restDivisionFor15(dividendo, arrayString) {
  if (dividendo % 15 === 0) {
    arrayString.push('fizzBuzz');
  }
}
function restDivisionFor3(dividendo, arrayString) {
  if (dividendo % 3 === 0 && dividendo % 5 !== 0) {
    arrayString.push('fizz');
  }
}
function restDivisionFor5(dividendo, arrayString) {
  if (dividendo % 5 === 0 && dividendo % 3 !== 0) {
    arrayString.push('buzz');
  }
}
function bugMessage(dividendo, arrayString) {
  if (dividendo % 3 !== 0 && dividendo % 5 !== 0) {
    arrayString.push('bug!');
  }
}

function fizzBuzz(arrayNumeros) {
  let arrayString = [];
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    bugMessage(arrayNumeros[index], arrayString);
    restDivisionFor15(arrayNumeros[index], arrayString);
    restDivisionFor3(arrayNumeros[index], arrayString);
    restDivisionFor5(arrayNumeros[index], arrayString);
  }
  // bug(arrayNumeros[index], arrayString);

  return arrayString;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
// Desafio 9
function encode(string) {
  let newString = string.replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');

  return newString;
}
function decode(string) {
  let newString = string.replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');

  return newString;
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
