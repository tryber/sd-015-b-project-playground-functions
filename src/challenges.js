// Desafio 1
function compareTrue(valor1, valor2) {
  let comparacao = valor1 && valor2;
  return comparacao;
}

// Desafio 2
function calcArea(base, height) {
  let triangle = (base * height) / 2;
  return triangle;
}

// Desafio 3
function splitSentence(string) {
  let stringSeparada = string.split(' ');
  return stringSeparada;
}

// Desafio 4
function concatName(string) {
  return `${string[string.length - 1]}, ${string[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(numeros) {
  numeros.sort();
  let higherNumber = numeros[0];
  let count = 0;
  for (let index in numeros) {
    if (numeros[index] === higherNumber) {
      count += 1;
    }
  }
  return count;
}
console.log(highestCount([-2, -2, -1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2) {
    let stringCats = 'os gatos trombam e o rato foge';
    return stringCats;
  }
  if (cat1 > cat2 && cat1 > mouse) {
    return 'catN2';
  }
  if (cat2 > cat1 && cat2 > mouse) {
    return 'catN1';
  }
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
