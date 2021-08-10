// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(arrayDeString) {
  return arrayDeString[arrayDeString.length - 1] + ', ' + arrayDeString[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(arrayNumeros) {
  let maiorNumero = arrayNumeros[0];
  for (let i = 0; i < arrayNumeros.length; i++) {
    if (maiorNumero < arrayNumeros[i]) {
      maiorNumero = arrayNumeros[i];
    }
  }
  let contador = 0;
  for (let i = 0; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] === maiorNumero) {
      contador++;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  let resultado;

  if (distanciaCat1 === distanciaCat2) {
    resultado = 'os gatos trombam e o rato foge';
  } else if (distanciaCat1 > distanciaCat2) {
    resultado = 'cat2';
  } else {
    resultado = 'cat1';
  }

  return resultado;
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let resultado = [];
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    let numero = arrayDeNumeros[i];
    if (numero % 3 === 0 && numero % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (numero % 3 === 0) {
      resultado.push('fizz');
    } else if (numero % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
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
