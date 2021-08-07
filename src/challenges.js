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
let highestNumber = Math.max.apply(Math, array);
let counter = 0;
for (let index = 0; index < array.length; index += 1) {
  if(highestNumber === array[index]) {
    counter += 1;
  }
}
return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let diffCat1 = Math.abs(cat1 - mouse);
let diffCat2 = Math.abs(cat2 - mouse);
  if (diffCat1 === diffCat2) {
  return "os gatos trombam e o rato foge";
} else if (diffCat1 > diffCat2) {
  return "cat2";
} else {
  return "cat1"
}
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
}
