// Desafio 1
function compareTrue(a, b) {
  return a && b;
} // Aprendi essa abreviação com o Isaac no codereview

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let string = array.pop() + ', ' + array.shift();
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let maiorNumero = arrayNumbers[0];
  let vezesQueRepete = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] >= maiorNumero) {
      maiorNumero = arrayNumbers[index];
    }
  }
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (maiorNumero === arrayNumbers[index]) {
      vezesQueRepete += 1;
    }
  }
  return vezesQueRepete;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let cat1Absoluto = Math.abs(mouse - cat1);
  let cat2Absoluto = Math.abs(mouse - cat2);

  if (cat1Absoluto > cat2Absoluto) {
    return 'cat2';
  } if (cat1Absoluto < cat2Absoluto) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
catAndMouse(1, 0, 2);

// Desafio 8

function fizzBuzz(arrayNumbers) {
  let arrayFizzBuzz = [];
  for (let index of arrayNumbers) {
    if (index % 3 === 0 && index % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (index % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (index % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return (arrayFizzBuzz);
}

// Desafio 9
function encode(str) {
  let codado = [];
  for (let index = 0; index <= str.length; index += 1) {
    if (str[index] === 'a') {
      codado.push('1');
    } else if (str[index] === 'e') {
      codado.push('2');
    } else if (str[index] === 'i') {
      codado.push('3');
    } else if (str[index] === 'o') {
      codado.push('4');
    } else if (str[index] === 'u') {
      codado.push('5');
    } else {
      codado.push(str[index]);
    }
  }
  return (codado.join(''));
}
encode('hll');

function decode(str) {
  let codado = [];
  for (let index = 0; index <= str.length; index += 1) {
    if (str[index] === '1') {
      codado.push('a');
    } else if (str[index] === '2') {
      codado.push('e');
    } else if (str[index] === '3') {
      codado.push('i');
    } else if (str[index] === '4') {
      codado.push('o');
    } else if (str[index] === '5') {
      codado.push('u');
    } else {
      codado.push(str[index]);
    }
  }
  return (codado.join(''));
}
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
