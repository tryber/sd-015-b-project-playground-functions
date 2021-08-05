// Desafio 1

function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}

// calcArea(51, 1);

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
}

// Desafio 4

function concatName(array) {
  let ultimo = array[array.length - 1];
  let primeiro = array[0];
  let soma = ultimo + ', ' + primeiro;
  return soma;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties;
  return resultado;
}

// Desafio 6

function highestCount(array) {
  let save = array[0];
  let count = 0;
  for (let numero of array) {
    if (numero > save) {
      save = numero;
      count = 0;
    }
    if (numero === save) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicaoGato1 = Math.abs(mouse - cat1); //-2  2
  let posicaoGato2 = Math.abs(mouse - cat2); //-1  1

  if (posicaoGato1 === posicaoGato2) {
    // 2 ===1
    return 'os gatos trombam e o rato foge';
  }
  if (posicaoGato1 > posicaoGato2) {
    // 2 > 1
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      resultado.push('buzz');
    } else if (array[index] % 3 === 0) {
      resultado.push('fizz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(string) {
  let frase = string;
  let resultado = [];
  for (let index = 0; index < frase.length; index += 1) {
    switch (frase[index]) {
      case 'a':
        resultado.push(1);
        break;

      case 'e':
        resultado.push(2);
        break;
      case 'i':
        resultado.push(3);
        break;
      case 'o':
        resultado.push(4);
        break;
      case 'u':
        resultado.push(5);
        break;

      default:
        resultado.push(frase[index]);
        break;
    }
  }
  let resultadoFinal = resultado.join('');
  return resultadoFinal;
}
function decode(string) {
  let frase = string;
  let resultado = [];
  for (let index = 0; index < frase.length; index += 1) {
    switch (frase[index]) {
      case '1':
        resultado.push('a');
        break;

      case '2':
        resultado.push('e');
        break;
      case '3':
        resultado.push('i');
        break;
      case '4':
        resultado.push('o');
        break;
      case '5':
        resultado.push('u');
        break;

      default:
        resultado.push(frase[index]);
        break;
    }
  }
  let resultadoFinal = resultado.join('');
  return resultadoFinal;
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
