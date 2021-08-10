// Desafio 1
function compareTrue(number1, number2) {
  if (number1 && number2) {
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
    if (arrayNumbers[index] === larger) {
      counter += 1;
    } else if (arrayNumbers[index] > larger) {
      larger = arrayNumbers[index];
      counter = 1;
    }
  }

  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = 0;
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    result = 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];

  for (let number of array) {
    if (number % 3 === 0) {
      if (number % 5 === 0) {
        result.push('fizzBuzz');
      } else {
        result.push('fizz');
      }
    } else if (number % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }

  return result;
}

// Desafio 9
function encode(stringCod) {
  stringCod = stringCod.replace(/a/g, '1');
  stringCod = stringCod.replace(/e/g, '2');
  stringCod = stringCod.replace(/i/g, '3');
  stringCod = stringCod.replace(/o/g, '4');
  stringCod = stringCod.replace(/u/g, '5');

  return stringCod;
}

function decode(stringDec) {
  stringDec = stringDec.replace(/1/g, 'a');
  stringDec = stringDec.replace(/2/g, 'e');
  stringDec = stringDec.replace(/3/g, 'i');
  stringDec = stringDec.replace(/4/g, 'o');
  stringDec = stringDec.replace(/5/g, 'u');

  return stringDec;
} console.log(decode('h3 th2r2!'));

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
