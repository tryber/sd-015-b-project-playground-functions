// Desafio 1
function compareTrue(a,b) {
  if (a===true && b===true){
    return true
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base*height)/2)
}

// Desafio 3
function splitSentence(string) {
  let split = string.split(" ");
  return split
}

// Desafio 4
function concatName(array) {
  let lastIten=array[array.length-1]
  let firstIten=array[0]
  return lastIten+', '+firstIten
  
}

// Desafio 5
function footballPoints(win,ties) {
  return ((win*3)+(ties*1))
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
