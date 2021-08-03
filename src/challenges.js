// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
    return (base * height) / 2
};

// Desafio 3
function splitSentence(stringToSplit, separator) {
  let words = stringToSplit.split(separator);
  return words;
};

// Desafio 4
function concatName(array) {
  return array[0] + ", " + array[array.length-1]; 
};

// Desafio 5
function footballPoints(wins, ties) {
  let sum = (wins * 3) + (ties * 1);
  return sum;
};

// Desafio 6
function highestCount(arrayOfNumbers) {
  let countNumbers = 0;
  let higherNumber = arrayOfNumbers[0];
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] > higherNumber) {
        higherNumber = arrayOfNumbers[index]
    }
  }
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (higherNumber === arrayOfNumbers[index]) {
      countNumbers += 1;
    }
  }
  return countNumbers;
};

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
