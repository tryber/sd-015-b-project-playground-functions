// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  let resultado = param1 && param2;
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let areaDeTriangulo = ((base * height) / 2);
  return areaDeTriangulo;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let array = str.split (" ");
  return array;
}
console.log(splitSentence("go Trybe"));
console.log(splitSentence("vamo que vamo"));
console.log(splitSentence("foguete"));


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
