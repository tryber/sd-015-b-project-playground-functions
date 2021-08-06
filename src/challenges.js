// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  } if (value1 === false && value2 === false) {
    return false;
  }
  return false;
}
compareTrue(false, true);

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let resultado = string.split(' ');
  return resultado;
}
splitSentence('Go trybe');
// Desafio 4
function concatName(array) {
  // seu código aqui
  let resultado = `${array[array.length - 1]}, ${array[0]}`;
  return resultado;
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let resultado = (wins * 3) + ties;
  return resultado;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maiorNumero = Math.max.apply(null, array);
  let contador = 0;
  for (let key = 0; key < array.length; key += 1) {
    if (maiorNumero === array[key]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  // console.log(distanciaCat1);
  // console.log(distanciaCat2);
  if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  } if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let resultado = [];
  for (let key = 0; key < array.length; key += 1) {
    if (array[key] % 3 === 0 && array[key] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (array[key] % 3 === 0) {
      resultado.push('fizz');
    } else if (array[key] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let resultado = string.replace(/a/g, '1');
  resultado = resultado.replace(/e/g, '2');
  resultado = resultado.replace(/i/g, '3');
  resultado = resultado.replace(/o/g, '4');
  resultado = resultado.replace(/u/g, '5');
  return resultado;
}
function decode(string) {
  // seu código aqui
  let resultado = string.replace(/1/g, 'a');
  resultado = resultado.replace(/2/g, 'e');
  resultado = resultado.replace(/3/g, 'i');
  resultado = resultado.replace(/4/g, 'o');
  resultado = resultado.replace(/5/g, 'u');
  return resultado;
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
