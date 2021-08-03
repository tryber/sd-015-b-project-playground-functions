// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayDeString = string.split(' ');

  return arrayDeString;
}

// Desafio 4
function concatName(array) {
  let ultimaString = array.pop();
  let primeiraString = array.shift();
  let resultado = ultimaString + ', ' + primeiraString;
  return resultado;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties;
  let sumsPoints = winsPoints + tiesPoints;

  return sumsPoints;
}console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  let vezesMaiorNumero = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }
  for (let contador = 0; contador < array.length; contador += 1) {
    if (maiorNumero === array[contador]) {
      vezesMaiorNumero += 1;
    }
  }
  return vezesMaiorNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  if (distanciaCat1 > distanciaCat2) {
    return console.log('cat2');
  } if (distanciaCat1 < distanciaCat2) {
    return console.log('cat1');
  } return console.log('os gatos trombam e o rato foge');
}

// Desafio 8
function arrayNumber(array) {
  for (let index = 0; index < array.length; index += 1) {
    let numero = array[index];
    return numero;
  }
}
function fizzBuzz() {
  arrayNumber(array);
  if (array[numero] % 3 === 0 && array[numero] % 5 !== 0) {
    console.log('fizz');
  } if (array[numero] % 5 === 0 && array[numero] % 3 !== 0) {
    console.log('buzz');
  } if (array[numero] % 3 === 0 && array[numero] % 5 === 0) {
    console.log('fizzBuzz')
  } console.log('bug!')  
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
