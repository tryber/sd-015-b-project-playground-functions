// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } return false;
}

// seu código aqui


// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2); 
}

// Desafio 3
function splitSentence(string) {
  let result = string.split (" ");
  return result
}

// Desafio 4
function concatName(array) {
  let concat = (array[array.length - 1]) +', ' + (array[0]);
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  footballPoints = ((wins * 3) + (ties * 1));
  return footballPoints;
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
function fizzBuzz (arrayNumbers) {
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
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aqui
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
