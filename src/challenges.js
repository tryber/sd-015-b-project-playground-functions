// Desafio 1
function compareTrue(a, b) {
  let d1;
  if (a === true && b === true) {
    d1 = true;
  } else { d1 = false; }
  return d1;
}

// Desafio 2
function calcArea(base, height) {
  let area;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let d3 = string.split(' ');
  return (d3);
}

// Desafio 4
function concatName(arrayDeStrings) {
  let d4 = '';
  d4 += arrayDeStrings[arrayDeStrings.length - 1];
  d4 += ', ';
  d4 += arrayDeStrings[0];
  return d4;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
}

// Desafio 6
function maiorN(array) {
  let maior = Number.NEGATIVE_INFINITY;
  for (let n of array) {
    if (n > maior) {
      maior = n;
    }
  }
  return maior;
}

function highestCount(arrayDeNumeros) {
  let d6 = 0;
  let larger = maiorN(arrayDeNumeros);
  for (let n of arrayDeNumeros) {
    if (n === larger) {
      d6 += 1;
    }
  }
  return d6;
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
