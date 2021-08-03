// Desafio 1
function compareTrue(x, y) {
  // seu código aqui
  return x && y;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let splittedSentence = sentence.split(' ');
  return splittedSentence;
}

// Desafio 4
function concatName(names) {
  // seu código aqui
  let firstName = names[0];
  let lastName = names[names.length - 1];
  return lastName + ', ' + firstName;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function findHighestNumber(numbers) {
  let highestNumber = numbers[0];

  for (const num of numbers) {
    if (num > highestNumber) {
      highestNumber = num;
    }
  }

  return highestNumber;
}

function highestCount(numbers) {
  // seu código aqui
  let highestNumber = findHighestNumber(numbers);
  let count = 0;

  for (const num of numbers) {
    if (num === highestNumber) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
