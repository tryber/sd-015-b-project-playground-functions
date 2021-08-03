// Desafio 1
function compareTrue(a, b) {
  if (typeof a === 'boolean' && typeof b === 'boolean') {
    return a && b;
  } else {
    console.log('Type of args are not boolean');
  }
}

// console.log( compareTrue(false, true) ); // teste 1
// console.log( compareTrue(false, false) ); // teste 2
// console.log( compareTrue(true, true) ); // teste 3
// console.log( compareTrue(1, true) ); // teste extra

// Desafio 2
function calcArea(base, height) {
  if (typeof base === 'number' && typeof height === 'number') {
    return base * height * 0.5;
  } else {
    console.log('Type of args are not number');
  }
}

// console.log( calcArea(10, 50) ); // teste 1
// console.log( calcArea(5, 2) ); // teste 2
// console.log( calcArea(51, 1) ); // teste 3
// console.log( calcArea(5, '5') ); // teste extra

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
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
