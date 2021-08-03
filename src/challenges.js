// Desafio 1
function compareTrue(a, b) {
    if (a && b === true)
      return true;
    else
      return false;
  } 

// Desafio 2
function calcArea(base, height) {
    return (base * height) / 2
}


// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}


// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}


// Desafio 5
function footballPoints(wins, ties) {
  let totalWins = 3 * wins;
  let totalPoints = totalWins + ties;
  return totalPoints;
}


// Desafio 6

function highestCount(numbersArray) {
  
  let acumulador = numbersArray[0];
  let add = 0;
  
  for (let teste in numbersArray) {
    if (numbersArray[teste] > acumulador) {
      acumulador = numbersArray[teste];
    }
  }
  
  for (let quantidade in numbersArray) {
    if (numbersArray[quantidade] === acumulador) {
      add += 1;
    }
  }
  return add;
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
