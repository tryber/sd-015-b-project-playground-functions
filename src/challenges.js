// Desafio 1
function compareTrue(a, b) {
  if(a && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  AreaTri = (base * height)/2
  return AreaTri;
}

// Desafio 3
function splitSentence(a) {
  let string = a;
  let array = string.split(" ")
  return array;
}

// Desafio 4
function concatName(array) {
  let ultimo = array[array.length - 1];
  let primeiro = array[0]
  let arr = []
  let space = ' '
  arr.unshift(ultimo)
  arr.push(space.concat(primeiro))
  return(arr + '')
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
