// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
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
  let max = Math.max(...arr);
  let count = arr.filter((x) => x === max).length;
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((Math.abs(cat1 - mouse)) === (Math.abs(cat2 - mouse))) {
    return 'os gatos trombam e o rato foge';
  } if ((Math.abs(cat1 - mouse)) < (Math.abs(cat2 - mouse))) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(arr) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] % 15 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (arr[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else if (arr[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(sentense) {
  let encodeSentence = '';
  for (let index = 0; index < sentense.length; index += 1) {
    if (sentense[index] === 'a') {
      encodeSentence += '1';
    } else if (sentense[index] === 'e') {
      encodeSentence += '2';
    } else if (sentense[index] === 'i') {
      encodeSentence += '3';
    } else if (sentense[index] === 'o') {
      encodeSentence += '4';
    } else if (sentense[index] === 'u') {
      encodeSentence += '5';
    } else {
      encodeSentence += sentense[index];
    }
  }
  return encodeSentence;
}
function decode(sentense) {
  let decodeSentence = '';
  for (let index = 0; index < sentense.length; index += 1) {
    if (sentense[index] === '1') {
      decodeSentence += 'a';
    } else if (sentense[index] === '2') {
      decodeSentence += 'e';
    } else if (sentense[index] === '3') {
      decodeSentence += 'i';
    } else if (sentense[index] === '4') {
      decodeSentence += 'o';
    } else if (sentense[index] === '5') {
      decodeSentence += 'u';
    } else {
      decodeSentence += sentense[index];
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
