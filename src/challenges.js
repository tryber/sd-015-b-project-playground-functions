// Desafio 1
const compareTrue = (a, b) => a && b;

// Desafio 2
const calcArea = (base, height) => ((base * height) / 2);

// Desafio 3
const splitSentence = (frase) => frase.split(' ');

// Desafio 4
const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;

// Desafio 5
const footballPoints = (wins, ties) => ((wins * 3) + ties);

// Desafio 6
function highestCount(array) {
  const number = Math.max(...array);
  return array.reduce((acc, num) => {
    if (num === number) acc += 1;
    return acc;
  }, 0);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distance1 = Math.abs(cat1 - mouse);
  const distance2 = Math.abs(cat2 - mouse);

  if (distance1 < distance2) {
    return 'cat1';
  }
  if (distance2 < distance1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  return numbers.map((num) => {
    if (num % 15 === 0) {
      return 'fizzBuzz';
    }
    if (num % 5 === 0) {
      return 'buzz';
    }
    if (num % 3 === 0) {
      return 'fizz';
    }
    return 'bug!';
  });
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
