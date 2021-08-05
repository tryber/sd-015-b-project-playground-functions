// Desafio 1

function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}
// console.log(compareTrue(1 === 1, 'casa' === 'casa'));

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}
console.log(calcArea(10, 50));

// calcArea(51, 1);

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
}
console.log(splitSentence('foguete'));

// Desafio 4

function concatName(array) {
  let ultimo = array[array.length - 1];
  let primeiro = array[0];
  let soma = ultimo + ', ' + primeiro;
  return soma;
}
console.log(concatName(['a', 'b', 'c']));

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties;
  return resultado;
}
console.log(footballPoints(0, 0));

// Desafio 6

function highestCount(array) {
  let save = array[0];
  let count = 0;
  for (let numero of array) {
    if (numero > save) {
      save = numero;
      count = 0;
    }
    if (numero === save) {
      count += 1;
    }
  }
  return count;
}
console.log(highestCount([1, 3, 4, 7, 7, 7, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicaoGato1 = Math.abs(mouse - cat1); //-2  2
  let posicaoGato2 = Math.abs(mouse - cat2); //-1  1
  

  if (posicaoGato1 === posicaoGato2) {  // 2 ===1
    return 'os gatos trombam e o rato foge';
  }
  if (posicaoGato1 > posicaoGato2) { // 2 > 1
    return 'cat2';
  } return 'cat1';
}
console.log(catAndMouse(3, 5, 4));

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
