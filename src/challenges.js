// Início das funções auxiliares para o desafio 6
function higherNumber(value) {
  let higher = value[0];

  for (let index = 0; index < value.length; index += 1) {
    if (value[index] > higher) {
      higher = value[index];
    }
  }

  return higher;
}

function higherRepeats(value) {
  let count = 0;
  let higher = higherNumber(value);

  for (let index = 0; index < value.length; index += 1) {
    if (higher === value[index]) {
      count += 1;
    }
  }

  return count;
}

// Fim das funções auxiliares para o desafio 6

// Início das funções auxiliares para o desafio 8
function addFizz(value, arr) {
  if (value % 3 === 0 && value % 5 !== 0) arr.push('fizz');
}

function addBuzz(value, arr) {
  if (value % 5 === 0 && value % 3 !== 0) arr.push('buzz');
}

function addFizzBuzz(value, arr) {
  if ((value % 3 === 0) && (value % 5 === 0)) arr.push('fizzBuzz');
}
// Fim das funções auxiliares para o desafio 8

// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(param1, param2) {
  let base = param1;
  let height = param2;
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(str) {
  let strSeparated = str.split(' ');

  return strSeparated;
}

// Desafio 4
function concatName(arr) {
  let names = [];

  names.push(arr[arr.length - 1]);
  names.push(arr[0]);

  return names.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3;
  let tiePoints = 1;
  let total = (wins * winPoints) + (ties * tiePoints);

  return total;
}

// Desafio 6
function highestCount(arr) {
  return higherRepeats(arr);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;

  distanceCat1 = Math.abs(distanceCat1);
  distanceCat2 = Math.abs(distanceCat2);

  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }

  return distanceCat1 < distanceCat2 ? 'cat1' : 'cat2';
}

// Desafio 8
function fizzBuzz(arr) {
  let final = [];

  for (let index = 0; index < arr.length; index += 1) {
    if ((arr[index] % 3 === 0) && (arr[index] % 5 === 0)) {
      final.push('fizzBuzz');
    } else if (arr[index] % 3 === 0) {
      final.push('fizz');
    } else if (arr[index] % 5 === 0) {
      final.push('buzz');
    } else {
      final.push('bug!');
    }
  }

  return final;
}

// Desafio 9
function encode(str) {
  let strEncoded = '';
  let vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let letter of str) {
    strEncoded += vowels[letter] || letter;
  }

  return strEncoded;
}

function decode(str) {
  let strDecoded = '';
  let vowels = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  for (let letter of str) {
    strDecoded += vowels[letter] || letter;
  }

  return strDecoded;
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
