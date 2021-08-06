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
  // seu código aquiclear
  palavra = '';
  let divide = palavra.split(' ');
  return divide;
}
splitSentence();

// Desafio 4
function concatName(array) {
  // seu código aqui+
  array = [];
  let primeiro = array[0];
  let ultimo = array.pop();
  let result = ultimo + primeiro;
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
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  mouse;
  cat1;
  cat2;

  if (cat1 > cat2 && cat2 <= mouse){
    return 'cat2';
  } 
  else if (cat2 > cat1 && cat1 <= mouse) {
    return 'cat1';
  }
  else {
    return 'os gatos trombam e o rato foge';
  }
}
catAndMouse();

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
