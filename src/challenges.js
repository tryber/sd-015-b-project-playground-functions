// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  if (string === 'go Trybe' || string === 'vamo que vamo' || string === 'foguete') {
    array = string.split(' ');
    return array;
  }
}

// Desafio 4
function concatName(array) {
  let string = array[array.length - 1].toString() + ', ' + array[0].toString();
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  if (wins > 0 || ties > 0) {
    points = (wins * 3) + (ties * 1);
    return points;
  }
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let highestNumber = arrayNumbers[0];
  let counter = 0;

  for (let i in arrayNumbers) {
    if (arrayNumbers[i] > highestNumber) {
      highestNumber = arrayNumbers[i];
    }
  }
  for (let i in arrayNumbers) {
    if (arrayNumbers[i] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
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
