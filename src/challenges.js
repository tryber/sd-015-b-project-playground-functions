// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  return boolean1 && boolean2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let array = str.split(' ');
  return array;
}

// Desafio 4
function concatName(names) {
  // seu código aqui
  let arrResult = [];
  for (let i = names.length - 1; i >= 0; i -= 1) {
    if (names[i] === names[names.length - 1] || names[i] === names[0]) {
      arrResult.push(names[i]);
    }
  }
  return arrResult.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let bigger = numbers[0];
  let biggerCounter = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > bigger) {
      bigger = numbers[i];
    }
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === bigger) {
      biggerCounter.push(numbers[i]);
    }
  }
  return biggerCounter.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let dCat1 = cat1 - mouse;
  let dCat2 = cat2 - mouse;
  if (dCat1 < 0) {
    dCat1 *= -1;
  }
  if (dCat2 < 0) {
    dCat2 *= -1;
  }
  if (dCat1 > dCat2) {
    return 'cat2';
  } if (dCat1 === dCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let strFizzBuzz = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      strFizzBuzz.push('fizzBuzz');
    } else if (numbers[i] % 3 === 0) {
      strFizzBuzz.push('fizz');
    } else if (numbers[i] % 5 === 0) {
      strFizzBuzz.push('buzz');
    } else {
      strFizzBuzz.push('bug!');
    }
  }
  return strFizzBuzz;
}

// Desafio 9
function encodeLowerVowel(string) {
  switch (string) {
  case 'a':
    return 1;
  case 'e':
    return 2;
  case 'i':
    return 3;
  case 'o':
    return 4;
  case 'u':
    return 5;
  default:
    return string;
  }
}

function encodeReceivedString(received) {
  let arrayEncodedString = [];
  for (let index = 0; index < received.length; index += 1) {
    arrayEncodedString.push(encodeLowerVowel(received[index]));
  }
  return arrayEncodedString.join('');
}

function encode(string) {
  // seu código aqui
  return encodeReceivedString(string);
}

function decodeLowerVowel(string) {
  switch (string) {
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
    return string;
  }
}

function decodeReceivedString(received) {
  let arraydecodedString = [];
  for (let index = 0; index < received.length; index += 1) {
    arraydecodedString.push(decodeLowerVowel(received[index]));
  }
  return arraydecodedString.join('');
}

function decode(string) {
  // seu código aqui
  return decodeReceivedString(string);
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
