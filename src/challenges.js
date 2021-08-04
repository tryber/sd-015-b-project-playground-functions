// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 && valor2 === true) return true;

  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui

  return base * height / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(" ");
}

// Desafio 4

function concatName(array) {
  // seu código aqui
  return array[array.length-1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(times) {
  // seu código aqui
  let higher = 5;
  let times2 = 0;
  for (let count = 0; count <= times.length; count += 1) {
    if(times[count] > higher) higher = times[count];
  }
  for (let count = 0; count <= times.length; count += 1){
    if(times[count] === higher) times2 = times2 + 1;
  }
  return times2;
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
