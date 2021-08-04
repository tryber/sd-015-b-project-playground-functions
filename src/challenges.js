// Desafio 1
function compareTrue(num1, num2) {
  // seu código aqui
  if (num1 && num2) {
    return true;     
  }
  else {
    return false;
  }
}
compareTrue();

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return base * height / 2;
}
calcArea();

// Desafio 3
function splitSentence(palavra) {
  // seu código aqui
  palavra = ' ';
  let divide = palavra.split(' ');
  return divide;
}
console.log(splitSentence());

// Desafio 4
function concatName(array) {
  // seu código aqui+
array = [];
let result = array[0] + ', ' + array[array.length-1];
return result;
}
concatName();

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
wins;
wins;
let pointWins = 3;
let pointTies = 1;

if (pointWins > 0 || pointTies > 0) {
  let result1 = wins * pointWins;
  let result2 = ties * pointTies;
  let result = result1 + result2;
  return result;
}
else {

}
}
footballPoints()

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
