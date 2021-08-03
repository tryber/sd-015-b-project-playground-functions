// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  }
    return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence(palavra) {
  // seu código aqui
  let array = palavra.split(" ");
  return array;
}

// Desafio 4
function concatName(arrayDeStrings) {
  // seu código aqui
 return arrayDeStrings[arrayDeStrings.length - 1] + ', ' + arrayDeStrings[0];
}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPoints = (wins * 3) + ties
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let resultado = 0;
  let maiorNumero = -100;
  for (let index = 0; index < numbers.length; index += 1) {
    let numeroAtual = numbers[index];
      if (numeroAtual > maiorNumero) {
        maiorNumero = numeroAtual;
      }
  }
  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (numbers[index2] === maiorNumero) {
      resultado += 1;
    }
  }
  return resultado;
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
