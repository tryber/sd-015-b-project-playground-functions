// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui  
  if (valor1 === true && valor2 === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
    return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentenca) {
  // seu código aqui
  return sentenca.split(' ');
}

// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui
  return arrayStrings[(arrayStrings.length) -1] + ", " + arrayStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(arrayNumeros) {
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
