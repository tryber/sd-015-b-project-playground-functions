// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let array = arr;
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(arr) {
  // seu código aqui
  let biggest = 0
  let repeat = 0
  for (let elemento of arr){
    if (elemento > biggest){
      biggest = elemento
    }
  }
  for (let elemento of arr){
    if (elemento === biggest){
      repeat += 1
    }
  }
  return repeat
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
