// Desafio 1
function compareTrue(param1, param2) {
  if(param1 && param2 == true){
    return true;
  } 
  else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2;
    return area;
  }
// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(array) {
  let newArray = array[array.length -1] + ', ' + array[0];
  return newArray;
}
// Desafio 5
function footballPoints(wins, ties) {
winPoints = 3
tiePoints = 1
  let pontos = (wins*winPoints) + (ties*tiePoints);
  return pontos
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
