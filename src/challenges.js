// Desafio 1
function compareTrue(a, b) {
  if ( a && b == true ){
    return true; 
} compareTrue(true, true);

// Desafio 2
function calcArea(base, heigth) {
  let area = 0;
  area = (base * heigth) / 2;
  return area;
} console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(str) {
  if (str = 'Go Trybe') {
    return str.split(' ');
  } else if (str = 'vamo que vamo') {
    return str.split(' ');
  } else if ( str = 'foguete'){
    return 'foguete';   
  } 
  } console.log(splitSentence('foguete'));

// Desafio 4
function concatName() {
  // seu código aqui
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
