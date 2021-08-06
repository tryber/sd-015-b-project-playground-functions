// Desafio 1
function compareTrue(par1, par2) {
  return par1 && par2;
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height;
  return area / 2;
}

// Desafio 3
function splitSentence(str) {
  let separaString = str.split(' ');
  return separaString;
}

// Desafio 4
function concatName(vetor) {
  let resultado = [];
  for (let index = 0; index <= vetor.length - 1; index += 1) {
    if (index === 0) {
      resultado.push(vetor[index]);
    } else if (index === vetor.length - 1) {
      resultado.push(vetor[index]);
    }
  }
  resultado = resultado.reverse();
  resultado = resultado.join(', ');
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function defineMaior(vetor) {
  let maior = -10000;
  for (let number of vetor) {
    if (number > maior) {
      maior = number;
    }
  }
  return maior;
}
function highestCount(vetor) {
  let count = 0;
  let maior = defineMaior(vetor);
  for (let number of vetor) {
    if (number === maior) {
      count += 1;
    }
  }
  return count;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let retorno = '';
  if (distCat1 > distCat2) {
    retorno = 'cat2';
  } else if (distCat1 < distCat2) {
    retorno = 'cat1';
  } else {
    retorno = 'os gatos trombam e o rato foge';
  }
  return retorno;
}

// Desafio 8
function fizzBuzz(vetor) {
  let vec = [];
  for (let number of vetor) {
    if (number % 3 === 0 && number % 5 === 0) {
      vec.push('fizzBuzz');
    } else if (number % 3 === 0) {
      vec.push('fizz');
    } else if (number % 5 === 0) {
      vec.push('buzz');
    } else {
      vec.push('bug!');
    }
  }
  return vec;
}

// Desafio 9-
function encode(str) {
  let string = str.split('');
  let strings = [];
  for (let letter of string) {
    if (letter === 'a') {
      strings.push('1');
    } else if (letter === 'e') {
      strings.push('2');
    } else if (letter === 'i') {
      strings.push('3');
    } else if (letter === 'o') {
      strings.push('4');
    } else if (letter === 'u') {
      strings.push('5');
    } else {
      strings.push(letter);
    }
  }
  return strings.join('');
}

function decode(str) {
  let string = str.split('');
  let strings = [];
  for (let letter of string) {
    if (letter === '1') {
      strings.push('a');
    } else if (letter === '2') {
      strings.push('e');
    } else if (letter === '3') {
      strings.push('i');
    } else if (letter === '4') {
      strings.push('o');
    } else if (letter === '5') {
      strings.push('u');
    } else {
      strings.push(letter);
    }
  }
  return strings.join('');
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
