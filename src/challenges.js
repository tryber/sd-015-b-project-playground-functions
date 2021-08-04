// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return (phrase.split([' ']));
}

// Desafio 4
function concatName(values) {
  return (values[values.length - 1]) + ', ' + values[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(numbers) {
  let howMany = 0;
  let biggestNumber = Math.max(...numbers);
  for (let number of numbers) {
    if (biggestNumber === number) {
      howMany += 1;
    }
  }
  return howMany;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);

  if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1Distance > cat2Distance) {
    return 'cat2';
  } else {
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(values) {
  let answer = [];

  for (let key in values) {
    if (values[key] % 3 === 0 && values[key] % 5 === 0) {
      answer.push('fizzBuzz');
    } else if (values[key] % 3 === 0) {
      answer.push('fizz');
    } else if (values[key] % 5 === 0) {
      answer.push('buzz');
    } else {
      answer.push('bug!');
    }
  }
  return answer;
}

// Desafio 9
function encode(encoding) {
  let encValue = encoding.split('');
  for (let index = 0; index < encValue.length; index += 1) {
    if (encValue[index] === 'a') encValue[index] = 1;
    else if (encValue[index] === 'e') encValue[index] = 2;
    else if (encValue[index] === 'i') encValue[index] = 3;
    else if (encValue[index] === 'o') encValue[index] = 4;
    else if (encValue[index] === 'u') encValue[index] = 5;
  }
  return encValue.join('');
}
function decode(decoding) {
  let decValue = decoding.split('');
  for (let index = 0; index < decValue.length; index += 1) {
    if (decValue[index] === '1') decValue[index] = 'a';
    else if (decValue[index] === '2') decValue[index] = 'e';
    else if (decValue[index] === '3') decValue[index] = 'i';
    else if (decValue[index] === '4') decValue[index] = 'o';
    else if (decValue[index] === '5') decValue[index] = 'u';
  }
  return decValue.join('');
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
