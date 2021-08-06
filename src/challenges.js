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
function encode(vogais) {
  // seu código aqui
  let vogaisa = vogais.replace(/a/g, "1");
  let vogaise = vogaisa.replace(/e/g, "2");
  let vogaisi = vogaise.replace(/i/g, "3");
  let vogaiso = vogaisi.replace(/o/g, "4");
  let vogaisu = vogaiso.replace(/u/g, "5");

  return vogaisu;
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
