// Desafio 1
function compareTrue(boolean1, boolean2) {
  return boolean1 && boolean2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let splitString = string.split(' ');
  return splitString;
}
// Desafio 4
function concatName(array) {
  let name = '';
  let space = ', ';
  for (let i = 0; i < array.length; i += 1) {
    name = array[array.length - 1] + space + array[0];
  }
  return name;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
  // seu código aqui
}

// Desafio 6
// Math.max e spread operator (...) retirado da documentacao: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function highestCount(array) {
  let countRepeats = 0;
  let biggestNumber = Math.max(...array);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === biggestNumber) {
      countRepeats += 1;
    }
  }
  return countRepeats;
}

// Desafio 7
// Funcao Math.abs retirada da documentacao (Link:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);

  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
  if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
// Desafio 8
function testes(number) {
  let numTested = '';
  if (number % 3 === 0 && number % 5 === 0) {
    numTested = 'fizzBuzz';
  } else if (number % 3 === 0) {
    numTested = 'fizz';
  } else if (number % 5 === 0) {
    numTested = 'buzz';
  }
  return numTested;
}
function fizzBuzz(array) {
  let num = [];
  for (let index of array) {
    if (testes(index).length > 0) {
      num.push(testes(index));
    } else {
      num.push('bug!');
    }
  }
  return num;
}

// Desafio 9
// Funcao .replace utilizada baseando-se na documentacao :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
function encode(string) {
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');
  return string;
}
// seu código aqui
function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
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
