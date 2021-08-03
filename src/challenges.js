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

// eslint-disable-next-line complexity
function selectLetterToEncode(letterIndex, array) {
  switch (array[letterIndex]) {
  case 'a':
    return '1';
  case 'e':
    return '2';
  case 'i':
    return '3';
  case 'o':
    return '4';
  case 'u':
    return '5';
  default:
    return array[letterIndex];
  }
}

// eslint-disable-next-line complexity
function selectLetterToDecode(letterIndex, array) {
  switch (array[letterIndex]) {
  case '1':
    return 'a';
  case '2':
    return 'e';
  case '3':
    return 'i';
  case '4':
    return 'o';
  case '5':
    return 'u';
  default:
    return array[letterIndex];
  }
}

function arrayToString(array) {
  let string = '';
  for (const iterator of array) {
    string += `${iterator}`;
  }
  return string;
}

function encode(string) {
  const array = Array.from(string);
  for (const letterIndex in array) {
    if (letterIndex >= 0) {
      array[letterIndex] = selectLetterToEncode(letterIndex, array);
    }
  }
  return arrayToString(array);
}

function decode(string) {
  const array = Array.from(string);
  for (const letterIndex in array) {
    if (letterIndex >= 0) {
      array[letterIndex] = selectLetterToDecode(letterIndex, array);
    }
  }
  return arrayToString(array);
}

encode('hello');
decode('h2ll4');

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
