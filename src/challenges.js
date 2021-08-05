// Desafio 1
function compareTrue(x, y) {
  return (x === true && y === true);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let split = string.split(' ');
  return split;
}

// Desafio 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = Math.max.apply(Math, array);
  let compare = 0;
  let storage = 0;
  for (let index = 0; index < array.length; index += 1) {
    compare = array[index];
    if (compare === maiorNumero) {
      storage += 1;
    }
  }
  return storage;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let string = [];
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] % 5 === 0 && arrayNumeros[index] % 3 === 0) {
      string.push('fizzBuzz');
    } else if (arrayNumeros[index] % 5 === 0) {
      string.push('buzz');
    } else if (arrayNumeros[index] % 3 === 0) {
      string.push('fizz');
    } else {
      string.push('bug!');
    }
  }
  return string;
}

// Desafio 9

function encode(phrase) {
  let codephrase = phrase.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4')
    .replace(/u/g, '5');
  return codephrase;
}

function decode(codephrase) {
  let phrase = codephrase.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o')
    .replace(/5/g, 'u');
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
