// Desafio 1
function compareTrue(bool1, bool2) {
  if ((bool1) && (bool2)) {
    return (true);
  } else {return (false);
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2 );
}

// Desafio 3
function splitSentence(stringSentence) {
  let arraySentence = stringSentence.split(' ');
  return (arraySentence);
}

// Desafio 4
function concatName(array1) {
  let string1 = array1[array1.length - 1] + ', ' + array1[0];
return (string1);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties);
  return (points);
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
