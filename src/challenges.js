// Desafio 1
function compareTrue(boolean_1, boolean_2) {
  if((boolean_1 && boolean_2) === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  result = (base * height) / 2
  return result
}

// Desafio 3
function splitSentence(phrase) {
  split_phrase = phrase.split(" ")
  return split_phrase
}

// Desafio 4
function concatName(name_array) {
  return_string = name_array[name_array.length - 1].concat(", ", name_array[0])
  return return_string
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

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
