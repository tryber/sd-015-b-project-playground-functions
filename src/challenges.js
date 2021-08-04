// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let firstElement = array[0];
  let lastElement = array[array.length - 1];
  return `${lastElement}, ${firstElement}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function getHighestNumber(array) {
  let highestNumber = array[0];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
    }
  }

  return highestNumber;
}

function highestCount(array) {
  let numberCount = {};

  for (let index = 0; index < array.length; index += 1) {
    if (numberCount[array[index]]) {
      numberCount[array[index]] += 1;
    } else {
      numberCount[array[index]] = 1;
    }
  }

  return numberCount[getHighestNumber(array)];
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }

  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }

  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function checkFizzBuzz(number, destinationArray) {
  if (number % 15 === 0) {
    destinationArray.push('fizzBuzz');
  } else if (number % 3 === 0) {
    destinationArray.push('fizz');
  } else if (number % 5 === 0) {
    destinationArray.push('buzz');
  } else {
    destinationArray.push('bug!');
  }
}

function fizzBuzz(array) {
  let fizzBuzzArray = [];

  for (let index = 0; index < array.length; index += 1) {
    checkFizzBuzz(array[index], fizzBuzzArray);
  }

  return fizzBuzzArray;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let encodedString = string.replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');

  return encodedString;
}

function decode(string) {
  let decodedString = string.replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');

  return decodedString;
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
