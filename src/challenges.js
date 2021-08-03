// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigh) {
  let areaTriangulo = (base * heigh) / 2;

  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let stringDividida = string.split(' ');

  return stringDividida;
}

// Desafio 4
function concatName(array) {
  let primeiroValor = array[0];
  let ultimoValor = array[array.length - 1];
  let stringConcatenada = ultimoValor + ', ' + primeiroValor;

  return stringConcatenada;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties * 1;
  let totalPoints = winPoints + tiePoints;

  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  let contador = 0;
  let maiorValor = array.reduce( function(a, b) {return Math.max(a, b);});

  for (let j = 0; j < array.length; j += 1) {
    if (array[j] === maiorValor) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado = undefined;

  if ((Math.abs(cat1 - mouse)) < (Math.abs(cat2 - mouse))) {
    resultado = 'cat1';
  } else if ((Math.abs(cat2 - mouse)) < (Math.abs(cat1 - mouse))) {
    resultado = 'cat2';
  } else if ((Math.abs(cat1 - mouse)) === (Math.abs(cat2 - mouse))) {
    resultado = 'os gatos trombam e o rato foge';
  } else {
    resultado = false;  
  }
  return resultado;
}



// Desafio 8
function fizzBuzz(array) {
  // for (let i in array.length) {
  //   if ()
  // }
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
