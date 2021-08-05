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
  let combo = array[array.length - 1].concat(' ', array[0]);
  return combo;
} console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let newWins = 3 * wins;
  let totalPoints = newWins + ties;
  return totalPoints;
} console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(numbersCheck) {
  let count = 0;
  let highestNumber = Math.max(...numbersCheck);
  for (const number of numbersCheck) {
    if (number === highestNumber) {
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
  function fizzBuzz(fizzBuzz) {
    for (i in fizzBuzz) {
     if (fizzBuzz[i] %5 === 0 && fizzBuzz[i] %3 === 0) {
         array.push('fizzBuzz');
     } else if(fizzBuzz[i] % 5 === 0){
         array.push('buzz');
     } else if (fizzBuzz[i] % 3 === 0) {
         array.push('fizz');
     } else {
         array.push("bug!");
     }
 return array; 
}
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
