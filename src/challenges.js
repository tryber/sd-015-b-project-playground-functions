// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringValor) {
  let split = stringValor.split(' ');
  return split;
}

// Desafio 4
function concatName(array) {
  let concat = `${array[array.length - 1]}, ${array[0]}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(highestCounts) {
  let count = 0;
  let max = Math.max(...highestCounts); // função max do objeto Math (... é spread syntax, chama a função)
  for (let i = 0; i < highestCounts.length; i += 1) {
    if (highestCounts[i] === max) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let diferencaCat1 = Math.abs(cat1 - mouse);
  let diferencaCat2 = Math.abs(cat2 - mouse);
  if (diferencaCat2 > diferencaCat1) {
    return 'cat1';
  }
  if (diferencaCat1 > diferencaCat2) {
    return 'cat2';
  }
  if (diferencaCat1 === diferencaCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array8) {
  let retorno = [];
  for (let i in array8) {
    if (array8[i] % 3 === 0 && array8[i] % 5 !== 0) {
      retorno.push('fizz');
    } else if (array8[i] % 5 === 0 && array8[i] % 3 !== 0) {
      retorno.push('buzz');
    } else if (array8[i] % 3 === 0 && array8[i] % 5 === 0) {
      retorno.push('fizzBuzz');
    } else {
      retorno.push('bug!');
    }
  }
  return retorno;
}

// Desafio 9
function encode(text) {
  let resultado = [];
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === 'a') {
      resultado.push('1');
    } else if (text[i] === 'e') {
      resultado.push('2');
    } else if (text[i] === 'i') {
      resultado.push('3');
    } else if (text[i] === 'o') {
      resultado.push('4');
    } else if (text[i] === 'u') {
      resultado.push('5');
    } else {
      resultado.push(text[i]);
    }
  }
  return (resultado.join(''));
}

function decode(text) {
  let resultado = [];
  for (let index = 0; index < text.length; index += 1) {
    if (text[index] === '1') {
      resultado.push('a');
    } else if (text[index] === '2') {
      resultado.push('e');
    } else if (text[index] === '3') {
      resultado.push('i');
    } else if (text[index] === '4') {
      resultado.push('o');
    } else if (text[index] === '5') {
      resultado.push('u');
    } else {
      resultado.push(text[index]);
    }
  }
  return (resultado.join(''));
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
