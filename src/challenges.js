// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;

  return result;
}

// Desafio 3
function splitSentence(sentence) {
  let arrOfStrings = sentence.split(' ');

  return arrOfStrings;
}

// Desafio 4
function concatName(arrOfStrings) {
  let concatString = `${arrOfStrings[arrOfStrings.length - 1]}, ${arrOfStrings[0]}`;

  return concatString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;

  return totalPoints;
}

// Desafio 6
function getHighestNumber(arrOfNumbers) {
  let highestNumber = arrOfNumbers[0];

  for (let i in arrOfNumbers) {
    if (arrOfNumbers[i] > highestNumber) {
      highestNumber = arrOfNumbers[i];
    }
  }

  return highestNumber;
}
function highestCount(arrOfNumbers) {
  let highestNumber = getHighestNumber(arrOfNumbers);
  let highestNumberCount = 0;

  for (let i in arrOfNumbers) {
    if (arrOfNumbers[i] === highestNumber) {
      highestNumberCount += 1;
    }
  }

  return highestNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function isFizzBuzz(arrOfNumbers, i) {
  return arrOfNumbers[i] % 15 === 0;
}

function isFizz(arrOfNumbers, i) {
  return arrOfNumbers[i] % 3 === 0 && arrOfNumbers[i] % 5 !== 0;
}

function isBuzz(arrOfNumbers, i) {
  return arrOfNumbers[i] % 5 === 0 && arrOfNumbers[i] % 3 !== 0;
}

function checkFizzBuzz(arrOfNumbers, i) {
  let message;

  message = 'bug!';

  if (isFizzBuzz(arrOfNumbers, i)) { message = 'fizzBuzz'; }

  if (isFizz(arrOfNumbers, i)) { message = 'fizz'; }

  if (isBuzz(arrOfNumbers, i)) { message = 'buzz'; }

  return message;
}

function fizzBuzz(arrOfNumbers) {
  let arrOfFizzBuzz = [];

  for (let i = 0; i < arrOfNumbers.length; i += 1) {
    arrOfFizzBuzz.push(checkFizzBuzz(arrOfNumbers, i));
  }

  return arrOfFizzBuzz;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
// Desafio 9
function checkingTranslation(encodedString, i) {
  let arrOfVogals = ['a', '1', 'e', '2', 'i', '3', 'o', '4', 'u', '5'];

  for (let j = 0; j < arrOfVogals.length - 1; j += 2) {
    if (encodedString[i] === arrOfVogals[j]) {
      return arrOfVogals[j + 1];
    }
  }
  return encodedString[i];
}
function encode(string) {
  let encodedString = string.split('');
  let translatedString = [];

  for (let i = 0; i < encodedString.length; i += 1) {
    translatedString.push(checkingTranslation(encodedString, i));
  }

  return translatedString.join('');
}

function decode(string) {
  let decodedString = string.split('');
  let translatedString = [];
  let vogalsObj = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  for (let i = 0; i < decodedString.length; i += 1) {
    if (vogalsObj[decodedString[i]]) {
      decodedString[i] = vogalsObj[decodedString[i]];
    }
    translatedString.push(decodedString[i]);
  }
  return translatedString.join('');
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
