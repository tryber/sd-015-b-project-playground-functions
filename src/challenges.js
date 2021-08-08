// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 && valor2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let strSplit = str.split(' ');
  return strSplit;
}

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let lastIndex = arr.length - 1;
  let newOrder = `${arr[lastIndex]}, ${arr[0]}`;
  return newOrder;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pointsWins = wins * 3;
  let pointsTies = ties * 1;

  let pointsTotal = pointsWins + pointsTies;

  return pointsTotal;
}

// Desafio 6
function findHighestNumber(arr) {
  let largestNumber = arr[0];

  for (let index in arr) {
    if (arr[index] > largestNumber) {
      largestNumber = arr[index];
    }
  }

  return largestNumber;
}

function highestCount(arr) {
  // seu código aqui
  let counter = 0;

  for (let index in arr) {
    if (arr[index] === findHighestNumber(arr)) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function compareDistance(distance1, distance2) {
  if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  }
  if (distance1 < distance2) {
    return 'cat1';
  }
  return 'cat2';
}

function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceMouseCat1 = Math.abs(mouse - cat1);
  let distanceMouseCat2 = Math.abs(mouse - cat2);

  return compareDistance(distanceMouseCat1, distanceMouseCat2);
}

// Desafio 8
function isDivisibleByThree(num) {
  if (num % 3 === 0 && num % 5 !== 0) {
    return true;
  }
}
function isDivisibleByFive(num) {
  if (num % 5 === 0 && num % 3 !== 0) {
    return true;
  }
}
function isDivisibleByThreeAndFive(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return true;
  }
}
function isNotDivisible(num) {
  if (num % 3 !== 0 && num % 5 !== 0) {
    return true;
  }
}

function checkDivisibility(num) {
  let wordToPush;
  if (isDivisibleByThree(num) === true) {
    wordToPush = 'fizz';
  }
  if (isDivisibleByFive(num) === true) {
    wordToPush = 'buzz';
  }
  if (isDivisibleByThreeAndFive(num) === true) {
    wordToPush = 'fizzBuzz';
  }
  if (isNotDivisible(num) === true) {
    wordToPush = 'bug!';
  }
  return wordToPush;
}
function fizzBuzz(arr) {
  // seu código aqui
  let arrayFizzBuzz = [];

  for (let number of arr) {
    arrayFizzBuzz.push(checkDivisibility(number));
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(str) {
  // seu código aqui
  let strSplit = str.split('');
  for (let index in strSplit) {
    if (strSplit[index] === 'a') {
      strSplit[index] = 1;
    } else if (strSplit[index] === 'e') {
      strSplit[index] = 2;
    } else if (strSplit[index] === 'i') {
      strSplit[index] = 3;
    } else if (strSplit[index] === 'o') {
      strSplit[index] = 4;
    } else if (strSplit[index] === 'u') {
      strSplit[index] = 5;
    }
  }
  let encodedStr = strSplit.join('');
  return encodedStr;
}

function decode(str) {
  // seu código aqui
  let strSplit = str.split('');
  for (let index in strSplit) {
    if (strSplit[index] == 1) {
      strSplit[index] = 'a';
    } else if (strSplit[index] == 2) {
      strSplit[index] = 'e';
    } else if (strSplit[index] == 3) {
      strSplit[index] = 'i';
    } else if (strSplit[index] == 4) {
      strSplit[index] = 'o';
    } else if (strSplit[index] == 5) {
      strSplit[index] = 'u';
    }
  }
  let decodedStr = strSplit.join('');
  return decodedStr;
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
