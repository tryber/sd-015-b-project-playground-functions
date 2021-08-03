// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  return boolean1 && boolean2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let array = str.split(' ');
  return array;
}

// Desafio 4
function concatName(names) {
  // seu código aqui
  let arrResult = [];
  for (let i = names.length-1; i >= 0;  i -= 1) {
    if (names[i] === names[names.length-1] || names[i] === names[0]) {
      arrResult.push(names[i]);
    }
  }
  return arrResult.join(', ');
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
