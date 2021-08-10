// Desafio 1
// check
function compareTrue(a, b) {
  return a === true && b === true;
}
console.log(compareTrue(true, true));
// Desafio 2
// check
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50));

// Desafio 3
// check
function splitSentence(string) {
  return string.split(' ');
} console.log(splitSentence('turma trybecat!'));

// Desafio 4
// check
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}
console.log('last and first: ', concatName(['Lucas', 'cassiano', 'ferraz', 'Paolillo']));

// Desafio 5
// check
function footballPoints(wins, ties) {
  let ganha = 3;
  let resultado = (wins * ganha) + ties;
  return resultado;
}
// Desafio 6
function highestCount(arrayNumeros) {
  let qtdMaior = 0;
  let higher = arrayNumeros[0];
  for (let count = 0; count < arrayNumeros.length; count += 1) {
    if (arrayNumeros[count] > higher) {
      higher = arrayNumeros[count];
    }
  }
  for (let count = 0; count < arrayNumeros.length; count += 1) {
    if (higher === arrayNumeros[count]) {
      qtdMaior += 1;
    }
  } return qtdMaior;
}
// Desafio 7
// check
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 - mouse === cat2 - mouse || cat2 - mouse === (cat1 - mouse) * -1) {
    return 'os gatos trombam e o rato foge';
  } if (cat1 - mouse < cat2 - mouse) {
    return 'cat1';
  } return 'cat2';
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(arrayAntigo) {
  let novaArray = [];
  for (let index = 0; index < arrayAntigo.length; index += 1) {
    if (arrayAntigo[index] % 3 === 0 && arrayAntigo[index] % 5 === 0) {
      novaArray.push('fizzBuzz');
    } else if (arrayAntigo[index] % 3 === 0) {
      novaArray.push('fizz');
    } else if (arrayAntigo[index] % 5 === 0) {
      novaArray.push('buzz');
    } else {
      novaArray.push('bug!');
    }
  }
  return novaArray;
}

// Desafio 9
function encode() {

}

function decode() {
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
