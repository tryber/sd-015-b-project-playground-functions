// Desafio 1
function compareTrue(valor1, valor2) {
  let comparacao = valor1 && valor2;
  return comparacao;
}

// Desafio 2
function calcArea(base, height) {
  let triangle = (base * height) / 2;
  return triangle;
}

// Desafio 3
function splitSentence(string) {
  let stringSeparada = string.split(' ');
  return stringSeparada;
}

// Desafio 4
function concatName(string) {
  return `${string[string.length - 1]}, ${string[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(numeros) {
  let higherNumber = 0;
  let count = 0;
  let higher = 0;
  for (let index = 0; index <= numeros.length; index += 1) {
    if (numeros[index] > numeros[higher]) {
      higher = index;
    }
  }
  higherNumber = numeros[higher];
  for (let index in numeros) {
    if (numeros[index] === higherNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = Math.abs(cat1 - mouse);
  let cat2Dist = Math.abs(cat2 - mouse);
  if (cat1Dist < cat2Dist) {
    return 'cat1';
  }
  if (cat2Dist < cat1Dist) {
    return 'cat2';
  }
  if (cat1Dist === cat2Dist) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(numeros) {
  let result = [];
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 === 0) {
      result.push('fizz');
    } else if (numeros[index] % 5 === 0) {
      result.push('buzz');
    } else if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let stringNumber = string.replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
  return stringNumber;
}

function decode(string) {
  let stringVowel = string.replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return stringVowel;
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
