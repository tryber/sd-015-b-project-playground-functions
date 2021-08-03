// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

compareTrue(false, true);

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

calcArea(51, 1);

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  let firstName = array[0];
  let lastName = array[array.length - 1];
  return `${lastName}, ${firstName}`;
}

let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(array));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(array) {
  let highestNumber = array[0];
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
    };
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === highestNumber) {
      count += 1;
    };
  }
  return count;
}

let arrayNumber = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(arrayNumber));

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
