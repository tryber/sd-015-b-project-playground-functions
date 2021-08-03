// Desafio 1
function compareTrue(bool1, bool2) {
  let result;

  if (bool1 && bool2) { 
    result = true;
  }
  else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;

  return result;
}

// Desafio 3
function splitSentence(sentence) {
  let arrOfStrings = sentence.split(' ');

  return arrOfStrings;
}

// Desafio 4
function concatName(arrOfStrings) {
  let concatString = arrOfStrings[arrOfStrings.length - 1] + ', ' + arrOfStrings[0];

  return concatString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;

  return totalPoints;
}

// Desafio 6
function highestCount(arrOfNumbers) {
  let highestNumber = arrOfNumbers[0];
  let highestNumberCount = 0;

  for (let i in arrOfNumbers) {
    if (arrOfNumbers[i] > highestNumber) {
      highestNumber = arrOfNumbers[i];
    }
  }
  for (let i in arrOfNumbers) {
    if (arrOfNumbers[i] === highestNumber) {
      highestNumberCount += 1;
    }
  }

  return highestNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(arrOfNumbers) {
  let arrOfFizzBuzz = [];

  for (let i in arrOfNumbers) {
    if (arrOfNumbers[i] % 3 === 0 && arrOfNumbers[i] % 5 === 0) {
      arrOfFizzBuzz.push('fizzBuzz');
    }
    else if (arrOfNumbers[i] % 3 === 0) {
      arrOfFizzBuzz.push('fizz');
    }
    else if (arrOfNumbers[i] % 5 === 0) {
      arrOfFizzBuzz.push('buzz');
    }
    else {
      arrOfFizzBuzz.push('bug!');
    }
  }

  return arrOfFizzBuzz;
}

// Desafio 9
function encode(string) {
  let encodedString = string.split('');

  for (let i in encodedString) {
    switch (encodedString[i]) {
      case "a":
        encodedString[i] = '1';
        break;
      case "e":
        encodedString[i] = '2';
        break;
      case "i":
        encodedString[i] = '3';
        break;
      case "o":
        encodedString[i] = '4';
        break;
      case "u":
        encodedString[i] = '5';
        break;
      default:
        break;
    }
  }

  return encodedString.join('');
}

function decode(string) {
  let decodedString = string.split('');

  for (let i in decodedString) {
    switch (decodedString[i]) {
      case "1":
        decodedString[i] = 'a';
        break;
      case "2":
        decodedString[i] = 'e';
        break;
      case "3":
        decodedString[i] = 'i';
        break;
      case "4":
        decodedString[i] = 'o';
        break;
      case "5":
        decodedString[i] = 'u';
        break;
      default:
        break;
    }
  }

  return decodedString.join('');
}
console.log(decode('x1bl15'));
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
