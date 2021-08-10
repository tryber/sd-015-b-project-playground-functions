// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
calcArea(51, 1);

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
splitSentence('go Trybe');

// Desafio 4
function concatName(array) {
  let firstArray = array[0];
  let lastArray = array[array.length - 1] + ', ';
  let combo = lastArray.concat(firstArray);
  return combo;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let newWins = 3 * wins;
  let totalPoints = newWins + ties;
  return totalPoints;
}
console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(numbersArray) {
  let highestNumber = numbersArray[0];
  let count = 0;
  for (let i of numbersArray) {
    if (i > highestNumber) {
      highestNumber = i;
    }
  }
  for (let j of numbersArray) {
    if (j === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let result = '';
  if (distCat1 > distCat2) {
    result = 'cat2';
  } else if (distCat2 > distCat1) {
    result = 'cat1';
  } else if (distCat1 === distCat2) {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(arry) {
  let fizzArray = [];
  for (let i = 0; i < arry.length; i += 1) {
    if (arry[i] % 5 === 0 && arry[i] % 3 === 0) {
      fizzArray.push('fizzBuzz');
    } else if (arry[i] % 5 === 0) {
      fizzArray.push('buzz');
    } else if (arry[i] % 3 === 0) {
      fizzArray.push('fizz');
    } else {
      fizzArray.push('bug!');
    }
  }
  return fizzArray;
}

// Desafio 9
function encode(string) {
  const encodeObject = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let encodedString = '';
  for (let part of string) {
    if (encodeObject[part]) {
      encodedString += encodeObject[part];
    } else {
      encodedString += part;
    }
  }
  return encodedString;
}

function decode(string) {
  const encodeObject = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let decodedString = '';
  for (let part of string) {
    if (encodeObject[part]) {
      decodedString += encodeObject[part];
    } else {
      decodedString += part;
    }
  }
  return decodedString;
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
