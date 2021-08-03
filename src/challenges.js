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
function splitSentence(stringToSplit) {
  let words = stringToSplit.split(" ");
  return words;
};

// Desafio 4
function concatName(array) {
  return array[array.length-1] + ", " + array[0]; 
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
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 < mouse - cat2) {
    return "cat1";
  } else if (mouse - cat2 < mouse - cat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge"
  }
};

// Desafio 8
function fizzBuzz(array) {
  let newArray = []
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      newArray.push("fizz");
    } else if (array[index] % 3 !== 0 && array[index] % 5 === 0) {
      newArray.push("buzz");
    } else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      newArray.push("fizzBuzz");
    } else {
      newArray.push("bug!")
    }
  } return newArray;
};

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
