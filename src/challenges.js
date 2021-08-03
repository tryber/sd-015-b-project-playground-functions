// Desafio 1
function compareTrue(a, b) {
  if (typeof a === 'boolean' && typeof b === 'boolean') {
    return a && b;
  }
}

// console.log( compareTrue(false, true) ); // teste 1
// console.log( compareTrue(false, false) ); // teste 2
// console.log( compareTrue(true, true) ); // teste 3
// console.log( compareTrue(1, true) ); // teste extra

// Desafio 2
function calcArea(base, height) {
  if (typeof base === 'number' && typeof height === 'number') {
    return base * height * 0.5;
  }
}

// console.log( calcArea(10, 50) ); // teste 1
// console.log( calcArea(5, 2) ); // teste 2
// console.log( calcArea(51, 1) ); // teste 3
// console.log( calcArea(5, '5') ); // teste extra

// Desafio 3
function splitSentence(str) {
  if (typeof str === 'string') {
    return str.split(' ');
  }
}

// console.log(splitSentence('go Trybe')); // teste 1
// console.log(splitSentence('vamo que vamo')); // teste 2
// console.log(splitSentence('foguete')); // teste 3
// console.log(splitSentence(123)); // teste extra

// Desafio 4
function concatName(arr) {
  if (typeof arr === 'object') {
    return arr[arr.length - 1] + ', ' + arr[0];;
  }
}

// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])); // teste 1
// console.log(concatName(['foguete', 'não', 'tem', 'ré'])); // teste 2
// console.log(concatName(['captain', 'my', 'captain'])); // teste 3
// console.log(concatName('123')); // teste extra

// Desafio 5
function footballPoints(wins, ties) {
  if (typeof wins === 'number' && typeof ties === 'number' && wins >= 0 && ties >= 0 && Math.floor(wins) === wins && Math.floor(ties) === ties ) {
    return wins * 3 + ties;
  }
}

// console.log( footballPoints(14, 8) ); // teste 1
// console.log( footballPoints(1, 2) ); // teste 2
// console.log( footballPoints(0, 0) ); // teste 3
// console.log( footballPoints(true, 0) ); // teste extra
// console.log( footballPoints(1.5, 0) ); // teste extra
// console.log( footballPoints(-2, 0) ); // teste extra

// Desafio 6
function highestCount(arr) {
  if(typeof arr === 'object' && arr.length > 0) {
    let max = arr[0];
    for (let i of arr) {
      if (i >= max) {
        max = i;
      }
    }
    let cont = 0;
    for (let i of arr) {
      if (i === max) {
        cont += 1;
      }
    }
    return cont;
  }
}

// console.log( highestCount([9, 1, 2, 3, 9, 5, 7]) ) // teste 1
// console.log( highestCount([0, 4, 4, 4, 9, 2, 1]) ) // teste 2
// console.log( highestCount([0, 0, 0]) ) // teste 3
// console.log( highestCount([])) // teste extra

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
