// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(param1, param2) {
  let base = param1
  let height = param2
  let area = (base * height) / 2

  return area
}

// Desafio 3
function splitSentence(str) {
  let strSeparated = str.split(' ')

  return strSeparated
}

// Desafio 4
function concatName(arr) {
  let names = []
    
  names.push(arr[arr.length - 1])
  names.push(arr[0])

  return names.join(', ')
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
