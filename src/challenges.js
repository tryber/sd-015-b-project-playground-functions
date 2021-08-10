// Desafio 1
function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(str) {
  let strToArr = str.split(" ");
  return strToArr;
}

// Desafio 4
function concatName(arrOfStr) {
  let first = arrOfStr[0];
  let last = arrOfStr[arrOfStr.length-1];
  let str = [last, first];
  return str.join(", ");
}

// Desafio 5
function footballPoints(wins, ties) {
  let gameWins = wins * 3;
  let gameTies = ties;
  let points = gameWins + gameTies;
  return points;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let highestNumber = arrayOfNumbers[0];
  let numberCount = 0;
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] > highestNumber) {
      highestNumber = arrayOfNumbers[index];
    }
  }
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] === highestNumber) {
      numberCount += 1;
    }
  }
  return numberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let luckycat1 = (cat1 - mouse) ** 2;
  let luckycat2 = (cat2 - mouse) ** 2;

  if (luckycat1 < luckycat2) {
    return "cat1";
  } else if (luckycat1 > luckycat2) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
    }
}

// Desafio 8

function divisao(dividendo, divisor) {
  return dividendo % divisor === 0;
}

function fizzBuzz(array) {
  let source;
  let arrayfb = [];

  for (let index = 0; index < array.length; index += 1) {
    source = array[index];
    if (divisao(source, 15)) {
      arrayfb.push ("fizzBuzz");
    } else if (divisao(source, 3)) {
      arrayfb.push ("fizz");
    } else if (divisao(source, 5)) {
      arrayfb.push ("buzz");
    } else {
      arrayfb.push ("bug!");
    }
  }
  return arrayfb;
}   

// Desafio 9
function encode(string) {
  let splitString = string.split('');
  for (let i in splitString) {
    if(splitString[i] === "a") {
      splitString[i] = 1;
    } else if (splitString[i] === "e") {
      splitString[i] = 2;
    } else if (splitString[i] === "i") {
      splitString[i] = 3;
    } else if (splitString[i] === "o") {
      splitString[i] = 4;
    } else if (splitString[i] === "u") {
      splitString[i] = 5;
    }
  }
  string = splitString.join('');
  return string;
}

function decode(string) {
  let splitString = string.split('');
  for (let i in splitString) {
    if(splitString[i] === "1") {
      splitString[i] = "a";
    } else if (splitString[i] === "2") {
      splitString[i] = "e";
    } else if (splitString[i] === "3") {
      splitString[i] = "i"
    } else if (splitString[i] === "4") {
      splitString[i] = "o";
    } else if (splitString[i] === "5") {
      splitString[i] = "u";
    }
  }
  string = splitString.join('');
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
