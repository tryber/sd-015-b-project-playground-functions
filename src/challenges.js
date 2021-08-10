// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
calcArea(10, 50);

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}
// Desafio 4
function concatName(list) {
  start = list[0];
  final = list[list.length - 1];
  return `${final}, ${start}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  total = wins * 3 + ties;
  return total;
}

// Desafio 6
function highestCount(array) {
  let numberHigher = array[0];
  let cont = 0;
  for (let index = 1; index < array.length; index++) {
    if (array[index] > numberHigher) {
      numberHigher = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === numberHigher) {
      cont++;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catMouse1 = mouse - cat1;
  let catMouse2 = cat2 - mouse;

  if (catMouse1 === catMouse2) {
    return 'os gatos trombam e o rato foge';
  }
  if (cat1 > cat2) {
    return 'cat2';
  } else {
    return 'cat1';
  }
}

// Desafio 8
function lista(array) {
  if (array % 3 === 0 && array % 5 === 0) {
    return 'fizzBuzz';
  }
  if (array % 3 === 0) {
    return 'fizz';
  }
  if (array % 5 === 0) {
    return 'buzz';
  } else {
    return 'bug!';
  }
}
function fizzBuzz(arrayFizzBuzz) {
  let array = [];

  for (let index = 0; index < arrayFizzBuzz.length; index += 1) {
    array.push(lista(arrayFizzBuzz[index]));
  }
  return array;
}

// Desafio 9
function encode(phrase, replace) {
  return phrase
    .replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
}
function decode(phrase2, replace) {
  return phrase2
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
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
