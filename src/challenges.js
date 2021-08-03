// Desafio 1
function compareTrue(a,b) {
  if (a && b === true){
    return true;
  }else{
    return false
  }
}
// Desafio 2
function calcArea(base,heigh) {
  areaTriangulo = (base * heigh) / 2;
  return areaTriangulo
}

// Desafio 3
function splitSentence(string) {
  let stringDividida = string.join(' ');
return stringDividida;
}


// Desafio 4
function concatName(array) {
  let primeiroValor = array[0]
  let ultimoValor = array[array.length-1]
  let stringConcatenada = primeiroValor + ", " + ultimoValor;

  return stringConcatenada;
}
let array=['arthur','luiz','viegas']
console.log(concatName(array));
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
