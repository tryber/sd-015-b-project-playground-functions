// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
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
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function orderNumbers(numberArray) {
  return numberArray.sort(function (a, b) { return a - b; });
}

function highestCount(numberArray) {
  let array = orderNumbers(numberArray);
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === array[array.length - 1]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function compareValues(value1, value2) {
  if (value1 === value2) {
    return 'os gatos trombam e o rato foge';
  }
  if (value1 < value2) {
    return 'cat1';
  }
  return 'cat2';
}

function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  return compareValues(distance1, distance2);
}

// Desafio 8
function divisibleByThree(number) {
  if ((number % 3) === 0 && (number % 5) !== 0) {
    return true;
  }
}

function divisibleByFive(number) {
  if ((number % 3) !== 0 && (number % 5) === 0) {
    return true;
  }
}

function divisibleByFiveAndThree(number) {
  if ((number % 3) === 0 && (number % 5) === 0) {
    return true;
  }
}
function notDivisible(number) {
  if ((number % 3) !== 0 && (number % 5) !== 0) {
    return true;
  }
}

function checkStatus(parameter) {
  let output;
  if (divisibleByThree(parameter) === true) {
    output = 'fizz';
  }
  if (divisibleByFive(parameter) === true) {
    output = 'buzz';
  }
  if (divisibleByFiveAndThree(parameter) === true) {
    output = 'fizzBuzz';
  }
  if (notDivisible(parameter) === true) {
    output = 'bug!';
  }
  return output;
}

function fizzBuzz(numberArray) {
  let newArray = [];
  for (let index = 0; index < numberArray.length; index += 1) {
    newArray.push(checkStatus(numberArray[index]));
  }
  return newArray;
}

// Desafio 9
function replaceLowerCaseA(phrase) {
  return phrase.replace(/a/g, '1');
}

function replaceLowerCaseE(phrase) {
  return replaceLowerCaseA(phrase).replace(/e/g, '2');
}

function replaceLowerCaseI(phrase) {
  return replaceLowerCaseE(phrase).replace(/i/g, '3');
}

function replaceLowerCaseO(phrase) {
  return replaceLowerCaseI(phrase).replace(/o/g, '4');
}

function replaceLowerCaseU(phrase) {
  return replaceLowerCaseO(phrase).replace(/u/g, '5');
}

function encode(phrase) {
  return replaceLowerCaseU(phrase);
}

function replaceNumber1(phrase) {
  return phrase.replace(/1/g, 'a');
}

function replaceNumber2(phrase) {
  return replaceNumber1(phrase).replace(/2/g, 'e');
}

function replaceNumber3(phrase) {
  return replaceNumber2(phrase).replace(/3/g, 'i');
}

function replaceNumber4(phrase) {
  return replaceNumber3(phrase).replace(/4/g, 'o');
}

function replaceNumber5(phrase) {
  return replaceNumber4(phrase).replace(/5/g, 'u');
}

function decode(phrase) {
  return replaceNumber5(phrase);
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
