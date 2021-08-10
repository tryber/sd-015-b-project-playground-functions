// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringSplit) {
  return stringSplit.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let arrayMax = Math.max.apply(null, array);
  let arrayMaxCount = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === arrayMax) {
      arrayMaxCount += 1;
    }
  }
  return arrayMaxCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = '';
  if ((Math.abs(cat1 - mouse)) === (Math.abs(cat2 - mouse))) {
    result = 'os gatos trombam e o rato foge';
  } else if ((Math.abs(cat1 - mouse)) < (Math.abs(cat2 - mouse))) {
    result = 'cat1';
  } else {
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function testFizzbuzz(number) {
  let result = '';
  if (number % 15 === 0) {
    result = 'fizzBuzz';
  } else if (number % 3 === 0) {
    result = 'fizz';
  } else if (number % 5 === 0) {
    result = 'buzz';
  }
  return result;
}
function fizzBuzz(numbersss) {
  let result = [];
  for (let i of numbersss) {
    if (testFizzbuzz(i).length > 0) {
      result.push(testFizzbuzz(i));
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let wordEncode = string.replace(/a/g, '1') // ref.: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
  return wordEncode;
}

function decode(string) {
  let wordDecode = string.replace(/1/g, 'a') // ref.: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return wordDecode;
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
