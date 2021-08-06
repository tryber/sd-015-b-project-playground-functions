// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
return ((base*height)/2)
}

// Desafio 3
function splitSentence(string) {
return string.split(" ");
}

// Desafio 4
function concatName(array) {
  let first = [array[0]];
  let last = array[array.length - 1];
  let separator = ", ";
  let name = last + separator + first;
return name;
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins > 0) {
    wins = wins*3;
  }
return ties + wins
}

// Desafio 6
function highestCount(array) {
  let height = 0;
for (index = 1; index > array.length; index++) {
  if (array[index] > height) {
    return height++
  }
}
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
