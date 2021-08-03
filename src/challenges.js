/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
// Desafio 1
function compareTrue(a, b) {
  return a === true && b === true;
}
console.log(compareTrue(true, true));
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
} console.log(splitSentence('turma trybecat!'));

// Desafio 4
function concatName(array) {
  return `${[array.length - 1]}, ${array[0]}`;
} array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(array));

// Desafio 5
function footballPoints() {
  return (wins * 3) + ties;
}
// Desafio 6
function highestCount(array_numbers) {
  let order_array = array_numbers.sort();
  let highest_number = order_array[order_array.lenght - 1];
  let contador = 0;
  for (index = 0; index < array_numbers.lenght; index += 1) {
    if (array_numbers[index] === highest_number) contador += 1;
  }
  return contador;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 - mouse === cat2 - mouse || cat2 - mouse === (cat1 - mouse) * -1) {
    return 'os gatos trombam e o rato foge';
  } if (cat1 - mouse < cat2 - mouse) {
    return 'cat1';
  } return 'cat2';
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
