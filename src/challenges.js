// Desafio 1
function compareTrue(booleanOne, booleanTwo) {
  if (booleanOne === true && booleanTwo === true) {
    return true;
  } else if (booleanOne === false && booleanTwo === false) {
    return false;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// Desafio 4
function concatName(array) {
  let string = array[array.length - 1] + ', ' + array[0];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
}

// Desafio 6
function highestCount(array) {
  let higherNumber = Math.max.apply(null, array);
  let count = 0;

  for (let index = 0; index < array.length; index++) {
    if (array[index] === higherNumber) {
      count++;
    }
  }

  return count;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance = mouse - cat1;
  let distance2 = mouse - cat2;

  if (distance < 0) {
    distance = Math.abs(-distance);
  } else if (distance2 < 0) {
    distance2 = Math.abs(-distance2);
  }

  if (distance < distance2) {
    let winner = 'cat1';
    return winner;
  } else if (distance2 < distance) {
    let winner = 'cat2';
    return winner;
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
function fizzBuzz(array) {
  let retorno = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      retorno.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      retorno.push('buzz');
    } else if (array[index] % 3 === 0) {
      retorno.push('fizz');
    } else {
      retorno.push('bug!');
    }
  }

  return retorno;
}
// Desafio 9
function encode(string) {
  string = string.replace(/a/g, 1);
  string = string.replace(/e/g, 2);
  string = string.replace(/i/g, 3);
  string = string.replace(/o/g, 4);
  string = string.replace(/u/g, 5);

  return string;
}
function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');

  return string;
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
