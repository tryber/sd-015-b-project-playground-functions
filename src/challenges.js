// Desafio 1
function compareTrue(valorUm, valorDois) {
  if (valorUm === true && valorDois === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  let splitString = str.split(' ');
  return splitString;
}

// Desafio 4
function concatName(names) {
  let namesConcatName = [];
  namesConcatName.push(names[(names.length) - 1]);
  namesConcatName.push(names[0]);

  return namesConcatName.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let higherNumber = Math.max.apply(null, numbers);
  let times = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === higherNumber) {
      times += 1;
    }
  }

  return times;
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
