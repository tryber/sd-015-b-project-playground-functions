// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
/** Sourse: https://stackoverflow.com/questions/18473326/javascript-break-sentence-by-words */
function splitSentence(sentense) {
  return sentense.split(' ');
}

// Desafio 4
function concatName(fullName) {
  return `${fullName[fullName.length - 1]}, ${fullName[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
/** Source: https://stackoverflow.com/questions/46640420/how-to-find-number-of-occurrence-of-highest-element-in-an-javascript-array/46640571 */
function highestCount(arr) {
  let maxNumber = Math.max(...arr);
  let count = arr.filter((number) => number === maxNumber).length;
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distanceCat1ToMouse = Math.abs(cat1 - mouse);
  const distanceCat2ToMouse = Math.abs(cat2 - mouse);
  if (distanceCat1ToMouse === distanceCat2ToMouse) return 'os gatos trombam e o rato foge';
  if (distanceCat1ToMouse < distanceCat2ToMouse) return 'cat1';
  return 'cat2';
}

// Desafio 8
function fizzBuzz(arr) {
  const result = arr.map((number) => {
    if (number % 15 === 0) return 'fizzBuzz';
    if (number % 5 === 0) return 'buzz';
    if (number % 3 === 0) return 'fizz';
    return 'bug!';
  });
  return result;
}

// Desafio 9
function encode(sentense) {
  let encodeSentence = '';
  const keyToDecode = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let letter of sentense) {
    if (!keyToDecode[letter]) {
      encodeSentence += letter;
    } else {
      encodeSentence += keyToDecode[letter];
    }
  }
  return encodeSentence;
}
function decode(sentense) {
  let decodeSentence = '';
  const keyToDecode = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  for (let letter of sentense) {
    if (!keyToDecode[letter]) {
      decodeSentence += letter;
    } else {
      decodeSentence += keyToDecode[letter];
    }
  }
  return decodeSentence;
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
