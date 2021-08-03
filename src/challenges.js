// Desafio 1
function compareTrue(parametro1, parametro2) {
  if(parametro1=== true && parametro2 === true){
    return true
  }
  return false;}
  
// Desafio 2
function calcArea(base, height) {
  calcArea= (base*height)/2;
  return calcArea;
}

// Desafio 3
function splitSentence(string) {
  splitSentence = string.split(" ");
  return splitSentence;
}

// Desafio 4
function concatName(array) {
  let ultimo = array[array.length - 1];
  concatName= ultimo +", "+ array[0];
  return concatName;
} 

// Desafio 5
function footballPoints(wins, ties) {
  footballPoints= (3*wins + ties);
  return footballPoints;
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
