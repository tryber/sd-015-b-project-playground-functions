// Desafio 1
function compareTrue(v1, v2) {
  if (v1 && v2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
  // Função .split foi encontrada buscando "how to split sentences in js?"
// e dentro da função '.split()' se coloca a condição para a separação, no caso, o espaço.
  }

// Desafio 4
function concatName(arrayStr) {
  lastItem = arrayStr[arrayStr.length - 1];
  firstItem = arrayStr[0];
  return (lastItem + ", " + firstItem);
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  
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
