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
function concatName(array) {
  return array[0] + ', ' + array[array.length - 1];
 } console.log('last and first: ', concatName(['Lucas', 'cassiano', 'ferraz', 'Paolillo']));

// Desafio 5
function footballPoints() {
  return points = wins * 3 + ties * 1;
}
// Desafio 6
function highestCount(arrayNumeros) {
  let contador = 0;
  let maiorNumero = arrayNumeros[0];

  for (let numero of arrayNumeros) {
    if (numero > maiorNumero) {
      maiorNumero = numero;
      contador += 1;
    } else if (numero === maiorNumero) { contador += 1; }
  }
  return contador;
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
