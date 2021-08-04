// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}
compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
calcArea(51, 1);

// Desafio 3
function splitSentence(phrase) {
  let result = phrase.split(' ');
  return result;
}
splitSentence('go trybe');

// Desafio 4
function concatName(name) {
  let result = name[name.length - 1] + ', ' + name[0];
  return result;
}
concatName(['captain', 'my', 'captain']);

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties;
  return result;
}
footballPoints(1, 2);

// Desafio 6
function highestCount(numbers) {
  let highestNumber = 0;
  let countNumber = 0;

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
      countNumber = 1;
    } else if (numbers[index] === highestNumber) {
      countNumber++;
    }
  }
  return countNumber;
}
highestCount([9, 1, 2, 3, 9, 5, 7])
highestCount([0, 4, 4, 4, 9, 2, 1])
highestCount([0, 0, 0])

// Desafio 7
function catAndMouse() {
 
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
