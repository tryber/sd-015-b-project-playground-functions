// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } return false;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
} calcArea(51, 1);

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
} splitSentence('go Trybe');

// Desafio 4
function concatName(array) {
  let combo = array[array.length - 1] + ', ' + array[0];
  return combo;
} console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let newWins = 3 * wins;
  let totalPoints = newWins + ties;
  return totalPoints;
} console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(numbersArray) {
  let highestNumber = numbersArray[0];
  let count = 0;
  for (let i of numbersArray) {
    if (i > highestNumber) {
      highestNumber = i;
    }
  }
  for (let j of numbersArray) {
    if (j === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let resposta = '';
  if (distCat1 > distCat2) {
    resposta = 'cat2';
  } else if (distCat2 > distCat1) {
    resposta = 'cat1';
  } else if (distCat1 === distCat2) {
    resposta = 'os gatos trombam e o rato foge';
  }
  return resposta;
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzz = [];
  for (let index of array) {
    if ((index % 3) === 0 && (index % 5) === 0) {
      fizzBuzz.push('fizzBuzz');
    } else if ((index % 3) === 0) {
      fizzBuzz.push('fizz');
    } else if ((index % 5) === 0) {
      fizzBuzz.push('buzz');
    } else {
      fizzBuzz.push('bug!');
    }
  }
  return fizzBuzz;
}

// Desafio 9
function encode(string) {
  const objetos = {
    'a': 1,
    'e': 2,
    'i': 3,
    'o': 4,
    'u': 5,
  }
    let palavras = string.split("");
  for (const letters in word){
    for (const keys in dictionary){
      if(palavras[letters] == keys){
        palavras[letters] = dictionary[keys];
        break;
      }
    }
  }
  let result = palavras.join('');
  return result;
}

function decode(string) {
  const objetos= {
    '1':'a',
    '2':'e',
    '3':'i',
    '4':'o',
    '5':'u',
  }
  let palavras = string.split("");
  for (const letters in palavras){
    for (const keys in dictionary){
      if(palavras[letters] == keys){
        palavras[letters] = dictionary[keys];
        break;
      }
    }
  }
  let result = palavras.join('');
  return result;
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