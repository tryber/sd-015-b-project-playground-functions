// Desafio 1
function compareTrue(a1, a2) {
  // seu código aqui
 if (a1 === true && a2 === true) {
   return true
 } else {
   return false
 }
} compareTrue(1 === 1)

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area
}
calcArea(10, 50)

// Desafio 3
function splitSentence(str, sep) {
  // seu código aqui
  let strToArr = str.split(' ')
  return strToArr
}
splitSentence("go Trybe")

// Desafio 4
function concatName(arr) {
  let firtsArr = arr[0];
  let lastArr = arr[arr.length -1]
  let result = lastArr + ', ' + firtsArr
  return result
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])

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
