// Desafio 1
function compareTrue(value1, value2) {
  let result = false;
  if (value1 === true && value2 === true) {
    result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(arrayNames) {
  return `${arrayNames[arrayNames.length - 1]}, ${arrayNames[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(arrayNumbers) {
  arrayNumbers = arrayNumbers.sort();
  let result = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === arrayNumbers[arrayNumbers.length - 1]) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = 'os gatos trombam e o rato foge';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    result = 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let result = [];
  let word;
  for (let index of arrayNumbers) {
    word = '';
    if (index % 3 === 0) {
      word = 'fizz';
    }
    if (index % 5 === 0) {
      word += 'buzz';
    }
    if (word === '') {
      word = 'bug!';
    }
    result.push(word);
  }
  return result;
}

// Desafio 9
function encode(phrase) {
  phrase = phrase.replace(/a/g, '1');
  phrase = phrase.replace(/e/g, '2');
  phrase = phrase.replace(/i/g, '3');
  phrase = phrase.replace(/o/g, '4');
  phrase = phrase.replace(/u/g, '5');
  return phrase;
}
function decode(phrase) {
  phrase = phrase.replace(/1/g, 'a');
  phrase = phrase.replace(/2/g, 'e');
  phrase = phrase.replace(/3/g, 'i');
  phrase = phrase.replace(/4/g, 'o');
  phrase = phrase.replace(/5/g, 'u');
  return phrase;
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
