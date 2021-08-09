// Desafio 1
function compareTrue(valora, valorb) {
  return valora && valorb === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(fraseJunta) {
  return fraseJunta.split(' ');
}

// Desafio 4
function concatName(recebeNomes) {
  return `${recebeNomes[recebeNomes.length - 1]}, ${recebeNomes[0]}`;
}

// Desafio 5
function getWins(calcWins) {
  return calcWins * 3;
}
function getTies(calcTies) {
  return calcTies * 1;
}
function footballPoints(wins, ties) {
  return getWins(wins) + getTies(ties);
}

// Desafio 6
function getMoreValue(containerNumbers) {
// vai receber o array de nomeros e verifica se é o maior numero
  let highestPosition = containerNumbers[0];
  for (let index = 0; index < containerNumbers.length; index += 1) {
    if (containerNumbers[index] > highestPosition) {
      highestPosition = containerNumbers[index];
    }
  }
  return highestPosition;
}
function getRepeat(getNumbers, getNumber) {
  let numberRepeat = [];
  for (let index = 0; index < getNumbers.length; index += 1) {
    if (getNumber === getNumbers[index]) {
      numberRepeat.push(getNumbers[index]);
    }
  }
  return numberRepeat;
}
function highestCount(arrayDeNumeros) {
  let maxNumberArray = getRepeat(arrayDeNumeros, getMoreValue(arrayDeNumeros));
  return maxNumberArray.length;
}

// Desafio 7
function calcPosition(positionMouse, positionCat) {
  let calc = positionMouse - positionCat;
  if (positionCat === 0) {
    calc = positionCat - positionMouse;
  }
  return calc ** 2;
}
function winCat(getCat01, getCat02) {
  if (getCat01 < getCat02) return 'cat1';
  return 'cat2';
}
function catAndMouse(mouse, cat1, cat2) {
  let result = winCat(calcPosition(mouse, cat1), calcPosition(mouse, cat2));
  if (calcPosition(mouse, cat1) === calcPosition(mouse, cat2)) {
    return 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function ifIsFizzBuzz(dividend) {
  if (dividend % 15 === 0) return ('fizzBuzz');
  return 0;
}
function ifIsFizz(dividend) {
  if (dividend % 3 === 0 && dividend % 5 !== 0) return ('fizz');
  return 0;
}
function ifIsBuzz(dividend) {
  if (dividend % 5 === 0 && dividend % 3 !== 0) return ('buzz');
  return 0;
}
function ifIsBug(dividend) {
  if (dividend % 5 !== 0 && dividend % 3 !== 0) return ('bug!');
  return 0;
}
function getArray(params) {
  let numberName = [];
  for (let index = 0; index < params.length; index += 1) {
    numberName.push(ifIsFizzBuzz(params[index]));
    numberName.push(ifIsFizz(params[index]));
    numberName.push(ifIsBuzz(params[index]));
    numberName.push(ifIsBug(params[index]));
  }
  return numberName;
}
function cleanFunction(params) {
  let cleanNumbers = [];
  for (let index = 0; index < params.length; index += 1) {
    if (params[index] !== 0) cleanNumbers.push(params[index]);
  }
  return cleanNumbers;
}

function fizzBuzz(numEntrada) {
  return cleanFunction(getArray(numEntrada));
}

// Desafio 9
function getArrayEnc(key, getKey, fraseUni, number) {
  if (key === getKey) fraseUni.push(number);
}
function encode(fraseParaCode) {
  // seu código aqui
  let fraseSplit = fraseParaCode.split('');
  let fraseUni = [];

  for (let key of fraseSplit) {
    if (['a', 'e', 'i', 'o', 'u'].includes(key)) {
      getArrayEnc(key, 'a', fraseUni, 1);
      getArrayEnc(key, 'e', fraseUni, 2);
      getArrayEnc(key, 'i', fraseUni, 3);
      getArrayEnc(key, 'o', fraseUni, 4);
      getArrayEnc(key, 'u', fraseUni, 5);
    } else {
      fraseUni.push(key);
    }
  }
  return fraseUni.join('');
}
console.log(encode('Helloa Word'));
function decode(fraseParaDecode) {
  // seu código aqui
  let fraseSplit = '';
  let fraseOrigi = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let key of fraseParaDecode) {
    if (fraseOrigi[key]) fraseSplit += fraseOrigi[key];
    else fraseSplit += key;
  }
  return fraseSplit;
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
