// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(stringSplit) {
  return (stringSplit.split(' '));
}

// Desafio 4
function concatName(array) {
  return (`${array[array.length - 1]}, ${array[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(array) {
  let arrayMax = array[0];
  let arrayMaxCount = 0;
  for (let indexMaxNumber = 0; indexMaxNumber < array.length; indexMaxNumber += 1) {
    if (array[indexMaxNumber] > arrayMax) {
      arrayMax = array[indexMaxNumber];
    }
  }
  for (let indexMaxCount = 0; indexMaxCount < array.length; indexMaxCount += 1) {
    if (array[indexMaxCount] === arrayMax) {
      arrayMaxCount += 1;
    }
  }
  return arrayMaxCount;
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
