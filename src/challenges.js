/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let sum = 0;
  sum = (base * height) / 2;
  return sum;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  let names = `${arrayString[arrayString.length - 1]}, `;// arrayString[arrayString.length - 1] + ', '
  names += arrayString.shift();
  return names;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victory;
  let draw;
  let sumAll;

  for (let index = wins; index <= wins * 3; index += 1) {
    victory = index;
  }
  for (let index = ties; index <= ties * 1; index += 1) {
    draw = index;
  }
  sumAll = victory + draw;
  return sumAll;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let larger = -1;
  let counter = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > larger) {
      larger = arrayNumbers[index];
    }
  }
  for (let secondIndex = 0; secondIndex < arrayNumbers.length; secondIndex += 1) {
    if (arrayNumbers[secondIndex] === larger) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((Math.abs(cat1) - Math.abs(mouse)) < (Math.abs(cat2) - Math.abs(mouse))) {
    return 'cat1';
  }
  if ((Math.abs(cat1) - Math.abs(mouse)) > (Math.abs(cat2) - Math.abs(mouse))) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
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
