// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let splited = [];

  let word = '';
  for (let i = 0; i < sentence.length; i += 1) {
    if (sentence[i] === ' ') {
      splited.push(word);
      word = '';
    } else {
      word += sentence[i];
    }
  }

  splited.push(word);
  return splited;
}

// Desafio 4
function concatName(array) {
  let names = '';

  names += array.pop();
  names += ', ';
  names += array.shift();

  return names;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
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
