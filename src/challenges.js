// Desafio 1
function compareTrue(vl1, vl2) {
  if (vl1 && vl2){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return 0.5*base*height;
}

// Desafio 3
function splitSentence(str) {
  let charConv = [];
  charConv = str.split(' ');
  return charConv;
}

var sentense = ['David', 'Alexandre', 'Souza'];
console.log(sentense.length)
// Desafio 4
function concatName(sentense) {
  let arr = sentense;
  let strConc;
  let position = arr.length - 1;
  strConc = sentense[position] + ', ' + sentense[0];
  return strConc;
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
