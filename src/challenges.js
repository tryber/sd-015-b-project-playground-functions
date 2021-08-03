// Desafio 1 a
function compareTrue(a, b) {
  return a && b;
}

compareTrue(false, true);

// Desafio 2
function calcArea(base, height) {
  let sum = (base * height) / 2;
  return sum;
}

calcArea(5, 2);

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(lista) {
  return lista[lista.length-1] + ", " + lista[0];
}

let nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(nomes));

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
