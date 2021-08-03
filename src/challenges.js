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
  let array = str.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let resultado = ((array[array.length - 1]) + ', ' + (array[0]));
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
}

// Desafio 6
function highestCount(values) {
  // seu código aqui
  let quantidade = 0;
  let maior = values[0];
  for(let index = 0; index < values.length; index += 1){
    if(values[index] > maior){
      maior = values[index];
    }
  }
  for(let index = 0; index < values.length; index += 1){
    if(values[index] === maior){
      quantidade += 1;
    }
  }
  return quantidade;
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
