// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  const array = [];
  let word = '';

  for (let index in string) {
    if (string[index] === ' ') {
      array.push(word);
      word = '';
    } else if (parseInt(index, 10) === string.length - 1) {
      word += string[index];
      array.push(word);
    } else {
      word += string[index];
    }
  }
  return array;
}

// Desafio 4
function concatName(array) {
  const string = `${array[array.length - 1]}, ${array[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  const points = (3 * wins + ties);
  return points;
}

// Desafio 6
function highestCount(array) {
  let repeatCount = 0;
  array.sort(function (a, b) {
    return a - b;
  });
  for (let numberIndex in array) {
    if (array[numberIndex] === array[array.length - 1]) {
      repeatCount += 1;
    }
  }
  return repeatCount;
}

// Desafio 7
function calculateDistance(mouse, cat) {
  if (cat > mouse) {
    return cat - mouse;
  }
  return mouse - cat;
}

function catAndMouse(mouse, cat1, cat2) {
  const distCat1 = calculateDistance(mouse, cat1);
  const distCat2 = calculateDistance(mouse, cat2);

  if (distCat1 < distCat2) {
    return 'cat1';
  }
  if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

// Desafio 8
function checkDivisibleBy3or5(number, array) {
  if (number % 3 === 0) {
    array.push('fizz');
  }
  if (number % 5 === 0) {
    array.push('buzz');
  }
  if (number % 3 !== 0 && number % 5 !== 0) {
    array.push('bug!');
  }
}

function fizzBuzz(array) {
  let newArray = [];
  for (let number of array) {
    if (number % 3 === 0 && number % 5 === 0) {
      newArray.push('fizzBuzz');
    } else {
      checkDivisibleBy3or5(number, newArray);
    }
  }
  return newArray;
}

// Desafio 9
function searchForCode(array, wantedCode) {
  let indexes = [];
  let codeIndex = array.indexOf(wantedCode);
  while (codeIndex !== -1) {
    indexes.push(codeIndex);
    codeIndex = array.indexOf(wantedCode, codeIndex + 1);
  }
  return indexes;
}

function placeCodesInPlaces(originalArray, indexesToChange, newCode) {
  for (let index = 0; index < indexesToChange.length; index += 1) {
    originalArray[indexesToChange[index]] = newCode;
  }
  return originalArray;
}

function arrayToString(array) {
  let string = '';
  for (const element of array) {
    string += `${element}`;
  }
  return string;
}

function encode(string) {
  const arrayToWork = Array.from(string);

  const letters = ['a', 'e', 'i', 'o', 'u'];
  const numbers = ['1', '2', '3', '4', '5'];

  for (let index = 0; index < letters.length; index += 1) {
    let indexes = searchForCode(arrayToWork, letters[index]);
    placeCodesInPlaces(arrayToWork, indexes, numbers[index]);
  }
  return arrayToString(arrayToWork);
}

function decode(string) {
  const arrayToWork = Array.from(string);

  const letters = ['a', 'e', 'i', 'o', 'u'];
  const numbers = ['1', '2', '3', '4', '5'];

  for (let index = 0; index < numbers.length; index += 1) {
    let indexes = searchForCode(arrayToWork, numbers[index]);
    placeCodesInPlaces(arrayToWork, indexes, letters[index]);
  }
  return arrayToString(arrayToWork);
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
