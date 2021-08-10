// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 === true) {
    return true;
  } if (param1 && param2 === false) {
    return false;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  let stringsplit = string.split(' ');
  return stringsplit;
}

// Desafio 4
function concatName(array) {
  let ultimoitem = array[array.length -1];
  let firstitem = array[0];
  let string = ultimoitem.concat(firstitem);
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let sumPoints = (wins * 3) + ties;
  return sumPoints; 
}

// Desafio 6
function highestCount(arr) {
let maior;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > maior) {
      maior = arr[index];
    }
  }(
let soma = 0;
for (let index2 = 0; index2 < arr.length; index2++) {
  if (maior === arr[index2]) {
    soma++;
  }
}
return soma;
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
