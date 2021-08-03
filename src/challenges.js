// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2 === true) {
    return true;
  }
  return false;
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
  // seu código aqui
}

// Desafio 3
function splitSentence(string) {
  let arrayDeStrings = string.split(' ');
  return arrayDeStrings;
  // seu código aqui
}

// Desafio 4
function concatName(array) {
  let resultado = '';
  let primeiroNome = array[0];
  let ultimoNome = array[array.length - 1];
  resultado = `${ultimoNome}, ${primeiroNome}`;
  return resultado;
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultadoDePontos = wins * 3 + ties * 1;
  return resultadoDePontos;
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let valor1 = Math.abs(cat1 - mouse);
  let valor2 = Math.abs(cat2 - mouse);

  if (valor1 === valor2) {
    return 'os gatos trombam e o rato foge';
  }
  if (valor1 - mouse < valor2 - mouse) {
    return 'cat1';
  }
  return 'cat2';
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      resultado.push('fizz');
    } else if (array[index] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
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
