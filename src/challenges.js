// Desafio 1
const compareTrue = (a, b) => a && b;

// Desafio 2
const calcArea = (base, height) => ((base * height) / 2);

// Desafio 3
const splitSentence = (frase) => frase.split(' ');

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(array) {
  let higherNumber = array[0];
  let cont = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > higherNumber) {
      higherNumber = array[i];
    }
  }
  for (let j = 0; j < array.length; j += 1) {
    if (array[j] === higherNumber) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);

  if (distance1 < distance2) {
    return 'cat1';
  }
  if (distance2 < distance1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function divisorTest(dividend, divider) {
  return dividend % divider === 0;
}

function ifFizzBuzz(dividend, string) {
  if (divisorTest(dividend, 15)) {
    return string.push('fizzBuzz');
  }
}

function ifFizz(dividend, string) {
  if (divisorTest(dividend, 3) && !divisorTest(dividend, 5)) {
    return string.push('fizz');
  }
}

function ifBuzz(dividend, string) {
  if (divisorTest(dividend, 5) && !divisorTest(dividend, 3)) {
    return string.push('buzz');
  }
}

function ifBug(dividend, string) {
  if (!divisorTest(dividend, 3) && !divisorTest(dividend, 5)) {
    return string.push('bug!');
  }
}

function fizzBuzz(numbers) {
  let string = [];
  for (let i = 0; i < numbers.length; i += 1) {
    (ifFizzBuzz(numbers[i], string));
    (ifFizz(numbers[i], string));
    (ifBuzz(numbers[i], string));
    (ifBug(numbers[i], string));
  }
  return string;
}

// Desafio 9
function encode(string) {
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');
  return string;
}

function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
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
