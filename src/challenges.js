// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(stringSplit) {
  return (stringSplit.split(' '));
}

// Desafio 4
function concatName(array) {
  return (`${array[array.length - 1]}, ${array[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(array) {
  let arrayMax = Math.max.apply(null, array); // ref.: https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
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
  if ((Math.abs(cat1 - mouse)) === (Math.abs(cat2 - mouse))) { // ref.: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
    result = 'os gatos trombam e o rato foge';
  } else if ((Math.abs(cat1 - mouse)) < (Math.abs(cat2 - mouse))) {
    result = 'cat1';
  } else {
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function fizzBuzz(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 15 === 0) {
      numbers[index] = 'fizzBuzz';
    } else if (numbers[index] % 3 === 0) {
      numbers[index] = 'fizz';
    } else if (numbers[index] % 5 === 0) {
      numbers[index] = 'buzz';
    } else {
      numbers[index] = 'bug!';
    }
  }
  return numbers;
}

// Desafio 9
function encode(string) {
  let wordEncode = '';
  wordEncode = string.replace(/a/g, '1'); // ref.: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  wordEncode = wordEncode.replace(/e/g, '2');
  wordEncode = wordEncode.replace(/i/g, '3');
  wordEncode = wordEncode.replace(/o/g, '4');
  wordEncode = wordEncode.replace(/u/g, '5');
  return wordEncode;
}

function decode(string) {
  let wordDecode = '';
  wordDecode = string.replace(/1/g, 'a'); // ref.: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  wordDecode = wordDecode.replace(/2/g, 'e');
  wordDecode = wordDecode.replace(/3/g, 'i');
  wordDecode = wordDecode.replace(/4/g, 'o');
  wordDecode = wordDecode.replace(/5/g, 'u');
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
