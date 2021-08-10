// Desafio 1
function compareTrue(booleanPar1, booleanPar2) {
  if (booleanPar1 && booleanPar2 === true) {
    return true;
  }
  return false;
}

console.log('1° Resultado: ', compareTrue(true, true));

// Desafio 2
function calcArea(base, heigth) {
  let triArea = (base * heigth) / 2;
  return triArea;
}

console.log('2° Resultado: ', calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  const splitStr = string.split(' ');
  return splitStr;
}

console.log('3° Divide a senteça: ', splitSentence('go Trybe'));

// Desafio 4
function concatName(arrayStr) {
  return `${arrayStr[arrayStr.length - 1]}, ${arrayStr[0]}`;
}

console.log('4° Último Item, Primeiro Item:',
  concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;
  let result = wins + ties;
  return result;
}

console.log('5° Resultado: ', footballPoints(14, 8));

// Desafio 6
function counterHigC(arrayVa, highestNumber) {
  let counter = 0;

  for (let index = 0; index < arrayVa.length; index += 1) {
    if (highestNumber === arrayVa[index]) {
      counter += 1;
    }
  }
  return counter;
}

function highestCount(arrayVa) {
  let highestNumber = arrayVa[0];

  for (let index = 0; index < arrayVa.length; index += 1) {
    if (arrayVa[index] > highestNumber) {
      highestNumber = arrayVa[index];
    }
  }
  return counterHigC(arrayVa, highestNumber);
}
console.log('6° O maior número do array se repete =', highestCount(
  [9, 1, 9, 3, 9, 5, 7, -1, -2, -2],
), 'vezes');

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
  if (cat1 < cat2) {
    return 'cat1';
  }
  return 'cat2';
}

console.log('7° Resultado:', catAndMouse());

// Desafio 8
function ifFizzOrBuzz(arrayNum, index, result) {
  if (arrayNum[index] % 3 === 0) {
    result.push('fizz');
  } else if (arrayNum[index] % 5 === 0) {
    result.push('buzz');
  } else result.push('bug!');
  return result;
}

function fizzBuzz(arrayNum) {
  let result = [];

  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] % 3 === 0 && arrayNum[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else ifFizzOrBuzz(arrayNum, index, result);
  }
  return result;
}

console.log('8° Resultado:', fizzBuzz([2, 15, 7, 9, 10, 45]));

// Desafio 9
function encode(phrase) {
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  const numbers = ['1', '2', '3', '4', '5'];
  let newphrase;

  for (let key in vogais) {
    if (phrase[key] === vogais[key]) {
      newphrase = phrase.replace(vogais[key], numbers[key]);
    }
  }
  return newphrase;
}
console.log(encode('aeibc e a o u u'));

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
