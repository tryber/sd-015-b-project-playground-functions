// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  strSplit = str.split(' ');
  return strSplit;
}

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let lastIndex = arr.length - 1;
  let newOrder = arr[lastIndex] + ', ' + arr[0];
  return newOrder;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pointsWins = wins * 3;
  let pointsTies = ties * 1;

  let pointsTotal = pointsWins + pointsTies;

  return pointsTotal;
}

// Desafio 6
function highestCount(arr) {
  // seu código aqui
  let counter = 0;
  let largestNumber = arr[0];

  for (index in arr) {
    if (arr[index] > largestNumber) {
      largestNumber = arr[index];
    }
  }

  for (index in arr) {
    if (arr[index] === largestNumber) {
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
