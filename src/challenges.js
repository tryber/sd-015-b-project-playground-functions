// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

// Desafio 3
function splitSentence(value) {
  let palavra = "";
  let retorno = [];
  value = value + " ";
  for (let caractere of value) {
    if (caractere != " ") {
      palavra = palavra + String(caractere);
    } else {
      retorno.push(palavra);
      palavra = "";
    }
  } return retorno;
}

// Desafio 4
function concatName(value) {
  return value[(value.length -1)] + ", " + value[0];
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

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

console.log(compareTrue(1,0))