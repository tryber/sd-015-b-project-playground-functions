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
  let concatString = arrOfStrings[arrOfStrings.length -1] + ", " + arrOfStrings[0];

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
      highestNumberCount++;
    }
  }

  return highestNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 < mouse - cat2) {
    return "cat1";
  }
  else if (mouse - cat1 > mouse - cat2) {
    return "cat2";
  }
  else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(arrOfNumbers) {
  let arrOfFizzBuzz = [];

  for (let i in arrOfNumbers) {
    if (arrOfNumbers[i] % 3 === 0 && arrOfNumbers[i] % 5 === 0) {
      arrOfFizzBuzz.push("fizzBuzz");
    }
    else if (arrOfNumbers[i] % 3 === 0) {
      arrOfFizzBuzz.push("fizz");
    }
    else if (arrOfNumbers[i] % 5 === 0) {
      arrOfFizzBuzz.push("buzz");
    }
    else {
      arrOfFizzBuzz.push("bug!");
    }
  }

  return arrOfFizzBuzz;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
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
