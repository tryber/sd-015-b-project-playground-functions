// Desafio 1
function compareTrue(entrada1, entrada2) {
  // seu código aqui
  let comparativo = 'true';
  return (entrada1 && entrada2 === comparativo);
}
console.log(compareTrue('true', 'true'));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let transformaArray = [];
  return transformaArray = frase.split(' ');
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(arrayPalavras) {
  // seu código aqui
  let index= 0;
  let index2 = (arrayPalavras.length -1);
  let primeiraPalavra = arrayPalavras[index];
  let segundaPalavra = arrayPalavras[index2];
      return primeiraPalavra + ', ' + segundaPalavra;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

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
