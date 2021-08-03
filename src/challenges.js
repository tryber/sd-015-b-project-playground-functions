// Desafio 1
function compareTrue(t,f) {
  if(t && f !== true){
    return false;
  } else if(t && f !== false){
    return false;
  } else if(t && f === false){
    return false;
  } else {
    return true;
  }
}

// Desafio 2
function calcArea(base, height) {
let resultado = 0
resultado = (base * height) / 2
return resultado;
}

// Desafio 3
function splitSentence(string) {
  resultado = []
  resultado = string.split(" ")
  return resultado;
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
