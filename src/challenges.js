// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(strings) {
  let firstElement = strings[0];
  let lastElement = strings[strings.length - 1];

  return `${lastElement}, ${firstElement}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function countRepetitions(array) {
  let repetitionCounter = {};

  for (let index = 0; index < array.length; index += 1) {
    if (repetitionCounter[array[index]]) {
      repetitionCounter[array[index]] += 1;
    } else {
      repetitionCounter[array[index]] = 1;
    }
  }

  return repetitionCounter;
}

function getHighestNumber(numbers) {
  let highestNumber = numbers[0];

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
    }
  }

  return highestNumber;
}

function highestCount(numbers) {
  let highestNumber = [getHighestNumber(numbers)];

  return countRepetitions(numbers)[highestNumber];
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let outcome;

  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    outcome = 'cat1';
  }

  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    outcome = 'cat2';
  }

  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    outcome = 'os gatos trombam e o rato foge';
  }

  return outcome;
}

// Desafio 8
function isDivisibleBy5(number, ifTrue, ifFalse) {
  if (number % 5 === 0) {
    return ifTrue;
  }

  return ifFalse;
}

function fizzBuzz(numbers) {
  const fizzBuzzArray = [];

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0) {
      fizzBuzzArray.push(isDivisibleBy5(numbers[index], 'fizzBuzz', 'fizz'));
    } else {
      fizzBuzzArray.push(isDivisibleBy5(numbers[index], 'buzz', 'bug!'));
    }
  }

  return fizzBuzzArray;
}

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
