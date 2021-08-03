// Desafio 1 a
function compareTrue(a, b) {
  return a && b;
}

compareTrue(false, true);

// Desafio 2
function calcArea(base, height) {
  let sum = (base * height) / 2;
  return sum;
}

calcArea(5, 2);

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(lista) {
  let lastName = lista[lista.length - 1];
  let firstName = lista[0];
  return `${lastName}, ${firstName}`;
}

let nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(nomes));

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
}

console.log(footballPoints(14, 8));

// Desafio 6

let highNumber = [];
let cont = 0;

function highestCount(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highNumber) {
      highNumber = numbers[index];
    } if (highNumber === numbers[index]) {
      cont += 1;
    }
  }
  return cont;
} 

let array = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(array));

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
