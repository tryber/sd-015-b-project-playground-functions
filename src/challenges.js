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
function catAndMouse(mouse, cat1, cat2) {
  const distCat1 = mouse - cat1;
  const distCat2 = mouse - cat2;

  if (cat2 < cat1) {
    return 'cat2';
  }
  if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat1';
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
