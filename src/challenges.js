// Desafio 1
function compareTrue(param1, param2){
  if (param1 && param2){
  return true;
} else {
  return false;    }
}

// Desafio 2
function calcArea(base, height){
  return (base*height)/2;
}

// Desafio 3
function splitSentence(str){
  return str.split(' ');
}

// Desafio 4
function concatName(array){
  let arr = array.reverse();
  let primeiro = arr[0];
  let ultimo = arr[arr.length-1];
  return primeiro + ', ' + ultimo;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins*3;
  let tiePoints = ties*1;
  return winPoints + tiePoints;
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
