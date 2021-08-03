// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function orderNumbers(numberArray) {
  return numberArray.sort(function (a, b) { return a - b; });
}

function highestCount(numberArray) {
  let array = orderNumbers(numberArray);
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === array[array.length - 1]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function compareValues(value1, value2) {
  if (value1 === value2) {
    return 'os gatos trombam e o rato foge';
  }
  if (value1 < value2) {
    return 'cat1';
  }
  return 'cat2';
}

function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  return compareValues(distance1, distance2);
}

// Desafio 8
function fizzBuzz() {
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
