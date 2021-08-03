// Desafio 1
function compareTrue(a, b) {
  return a === true && b === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2; 
}
console.log(calcArea(50, 10));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('Vamos que vamos!'));

// Desafio 4
function concatName(array) {
  return array[array.length-1] + ', ' + array[0];
}
array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
console.log(concatName(array))

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
