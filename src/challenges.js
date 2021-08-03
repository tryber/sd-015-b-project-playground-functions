// Desafio 1
function compareTrue() {
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(' ');
  return resultado;
}

// Desafio 4
function concatName(array) {
  let concat = `${array[array.length - 1]}, ${array[0]}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + ties);
  return points;
}

// Desafio 6
function highestCount(array) {
  let cont = 0;
  array.sort();
  console.log(array);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === array[array.length - 1]) {
      cont += 1;
    }
  }
  return cont;
}

console.log(highestCount([0, 0, 0]))

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
