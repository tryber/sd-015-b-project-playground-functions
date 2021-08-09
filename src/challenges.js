// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(array) {
  let numberMaior = array[0];
  let count = 0;
  for (let num of array) {
    if (num > numberMaior) numberMaior = num;
  }
  for (let num of array) {
    if (num === numberMaior) count += 1;
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseDistanceCat1 = Math.abs(cat1 - mouse);
  let mouseDistanceCat2 = Math.abs(cat2 - mouse);
  if (mouseDistanceCat1 === mouseDistanceCat2) {
    return 'os gatos trombam e o rato foge';
  } if (mouseDistanceCat1 > mouseDistanceCat2) {
    return 'cat2';
  } return 'cat1';
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let phrase = [];
  for (let num of arrayNumbers) {
    if (num % 15 === 0) {
      phrase.push('fizzBuzz');
    } else if (num % 5 === 0) {
      phrase.push('buzz');
    } else if (num % 3 === 0) {
      phrase.push('fizz');
    } else {
      phrase.push('bug!');
    }
  }
  return phrase;
}

// Desafio 9
function encode(string) {
  let finishString = string.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4').replace(/u/g, '5');
  return finishString;
}

function decode(string1) {
  let finishString1 = string1.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
  return finishString1;
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
