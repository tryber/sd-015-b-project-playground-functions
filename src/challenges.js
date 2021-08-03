// Desafio 1
function compareTrue(par1, par2) {
  if (par1 === true && par2 === true) {
    return true;
  }
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
  resultado = resultado.join(', ');
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(vetor) {
  let count = 0;
  let maior = -10000;
  for (number of vetor) {
    if (number > maior) {
      maior = number;
    }
  }

  for (number of vetor) {
    if (number === maior) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 > mouse) {
    let distCat1 = cat1 - mouse;
    if (cat2 > mouse) {
      let distCat2 = cat2 - mouse;
    } else if (cat2 < mouse) {
      let distCat2 = mouse - cat2;
    }
  } else if (cat1 < mouse) {
    let distCat1 = mouse - cat1;
    if (cat2 > mouse) {
      let distCat2 = cat2 - mouse;
    } else if (cat2 < mouse) {
      let distCat2 = mouse - cat2;
    }
  }
  if (distCat1 > distCat2) {
    return 'cat2';
  }
  if (distCat1 < distCat2) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
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

// Desafio 9
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
  string = str.split('');
  let strings = [];
  for (letter of string) {
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
