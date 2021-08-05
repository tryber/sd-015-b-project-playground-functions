// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(' ');
  return resultado;
}

// Desafio 4
function concatName(array) {
  let concat = `${array[array.length - 1]}, ${array[0]}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + ties);
  return points;
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
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function divisorTest(dividend, divider) {
  return dividend % divider === 0;
}

function fizzBuzz(a) {
  let resultado = [];
  for (let i = 0; i < a.length; i += 1) {
    if (divisorTest(a[i], 15)) {
      resultado.push('fizzBuzz');
    } else if (divisorTest(a[i], 3)) {
      resultado.push('fizz');
    } else if (divisorTest(a[i], 5)) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  string = 'This is an encading test';
  let resultado = string.replace(/a/g, '1');
  console.log(resultado);
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
