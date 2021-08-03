// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(a) {
  let afterSplit = a.split(' ');
  return afterSplit;
}

// Desafio 4
function concatName(array) {
  let inverted = array.reverse();
  return `${inverted[0]}, ${inverted[inverted.length - 1]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
  
}

// Desafio 6
function highestCount(a) {
  let count = 0;
  function bigger (b, c) {
    return b - c;
  }
  let sortedArray = a.sort(bigger);
  let highest = a[sortedArray.length - 1];
  for (let i = 0; i < sortedArray.length; i += 1) {
    if (sortedArray[i] === highest) {
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
