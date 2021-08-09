// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
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
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(arr) {
  let greater = Math.max.apply(null, arr);
  let counter = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (greater === arr[index]) {
      counter += 1;
    }
  } return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arr) {
  let fizzBuzzArray = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (arr[index] % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else if (arr[index] % 3 === 0) {
      fizzBuzzArray.push('fizz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  } return fizzBuzzArray;
}

// Desafio 9
function encode(sentence) {
  sentence = sentence.split('');
  const dict = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  let translation = [];
  for (let item of sentence) {
    if (dict[item]) {
      item = dict[item];
    } translation.push(item);
  } return translation.join('');
}
function decode(sentence) {
  sentence = sentence.split('');
  const dict = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let translation = [];
  for (let item of sentence) {
    if (dict[item]) {
      item = dict[item];
    } translation.push(item);
  } return translation.join('');
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
