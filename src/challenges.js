/* eslint-disable max-lines-per-function */
// Desafio 1
function compareTrue(x, y) {
  // seu código aqui
  if (x === true && y === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringStart) {
  // seu código aqui
  let resultado = stringStart.split(" ");
  return resultado;

}

// Desafio 4
function concatName(phrase) {
  // seu código aqui
  return phrase[phrase.length - 1] + ", " + phrase[0];

}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(number) {
  // seu código aqui
  let aux = number[0];
  let cont = 0;
  for (let i = 0; i < number.length; i += 1) {
    if (aux < number[i]) {
      aux = number[i];
    }
  }
  for (let j = 0; j < number.length; j += 1) {
    if (aux == number[j]) {
      cont += 1;
    }
  }
  return cont;

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return ('cat1');
  } else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return ('cat2');
  } else {
    return ('os gatos trombam e o rato foge');
  }
  //(7,3,2)
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(receiveNumber) {
  // seu código aqui
  let wordArray = [];
  for (let i = 0; i < receiveNumber.length; i += 1) {
    if (receiveNumber[i] % 3 === 0 && receiveNumber[i] % 5 === 0) {
      wordArray.push('fizzBuzz');
    } else if ((receiveNumber[i]) % 5 === 0) {
      wordArray.push('buzz');
    } else if (receiveNumber[i] % 3 === 0) {
      wordArray.push('fizz');
    } else if (receiveNumber[i] % 3 !== 0 || receiveNumber[i] % 5 !== 0) {
      wordArray.push('bug!');
    }
  }
  return wordArray;
}

// Desafio 9
// eslint-disable-next-line max-lines-per-function
// eslint-disable-next-line complexity
function encode(caracter) {
  // seu código aqui
  let aux = '';
  for (let i = 0; i < caracter.length; i += 1) {
    switch (caracter[i]) {
      case 'a':
        aux += '1';
        break;
      case 'e':
        aux += '2';
        break;
      case 'i':
        aux += '3';
        break;
      case 'o':
        aux += '4';
        break;
      case 'u':
        aux += '5';
        break;
      default:
        aux += caracter[i];
    }

  } return (aux);

}
function decode(caracterDecode) {
  // seu código aqui
  let aux = '';
  for (let i = 0; i < caracterDecode.length; i += 1) {
    switch (caracterDecode[i]) {
      case '1':
        aux += 'a';
        break;
      case '2':
        aux += 'e';
        break;
      case '3':
        aux += 'i';
        break;
      case '4':
        aux += 'o';
        break;
      case '5':
        aux += 'u';
        break;
      default:
        aux += caracterDecode[i];
    }

  } return (aux);
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
