// Desafio 1
function compareTrue(valor1, valor2){
  if (valor1 === false && valor2 === true){
    return false;
  }
  else if (valor1 === true && valor2 === false){
    return false;
  }
  else if (valor1 === false && valor2 === false){
      return false;
  }
  else if (valor1 === true && valor2 === true){
      return true
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
    return ((base * height)/2)
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
    let resultado = frase.split(' ');
    return resultado
}

// Desafio 4
function concatName(concatenation) {
  // seu código aqui
    let primeiro = concatenation[concatenation.length - 1] ;
    let segundo = concatenation[0] ;
    return primeiro + ', ' + segundo  
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
