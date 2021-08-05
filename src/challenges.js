// Desafio 1
function compareTrue(primeiroTermo, segundoTermo) {
  if (primeiroTermo === true && segundoTermo === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  let area = base * altura / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
}

// Desafio 4
function concatName(string2) {
  let resultado = `${string2[string2.length - 1]}, ${string2[0]}`;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = 3 * wins + ties;
  return resultado;
}

// Desafio 6
function highestCount(array) {
  let teste = -100;
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > teste) {
      contador = 1;
      teste = array[index];
    } else if (array[index] === teste) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      resultado.push('fizz');
    } else if (array[index] % 5 === 0) {
      resultado.push('buzz');
    } else { resultado.push('bug!'); }
  }
  return resultado;
}

// Desafio 9
function encode(string) {
  let code = [];
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
    case 'a':
      code[index] = 1;
      break;
    case 'e':
      code[index] = 2;
      break;
    case 'i':
      code[index] = 3;
      break;
    case 'o':
      code[index] = 4;
      break;
    case 'u':
      code[index] = 5;
      break;
    default:
      code[index] = string[index];
      break;
    }
  }
  return code.join('');
}

function decode(string) {
  let code = [];
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
    case '1':
      code[index] = 'a';
      break;
    case '2':
      code[index] = 'e';
      break;
    case '3':
      code[index] = 'i';
      break;
    case '4':
      code[index] = 'o';
      break;
    case '5':
      code[index] = 'u';
      break;
    default:
      code[index] = string[index];
      break;
    }
  }
  return code.join('');
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
