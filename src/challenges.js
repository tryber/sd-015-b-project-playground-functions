// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}
compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
calcArea(51, 1);

// Desafio 3
function splitSentence(phrase) {
  let result = phrase.split(' ');
  return result;
}
splitSentence('go trybe');

// Desafio 4
function concatName(name) {
  let result = name[name.length - 1] + ', ' + name[0];
  return result;
}
concatName(['captain', 'my', 'captain']);

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties;
  return result;
}
footballPoints(1, 2);

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0];
  let countNumber = 0;

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
      countNumber = 1;
    } else if (numbers[index] === highestNumber) {
      countNumber++;
    }
  }
  return countNumber;
}
highestCount([9, 1, 2, 3, 9, 5, 7]);
highestCount([0, 4, 4, 4, 9, 2, 1]);
highestCount([-2, -2, -1]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
catAndMouse(-5, 6, 2);
catAndMouse(-5, -5, -2);
catAndMouse(-5, -5, 2);
catAndMouse(5, -5, 2);
catAndMouse(5, -3, -3);

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      result.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}
fizzBuzz([2, 15, 7, 9, 45]);
fizzBuzz([7, 9]);
fizzBuzz([9, 25]);

// Desafio 9
function encode(phrase) {
  let result = ' ';
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === 'a') {
      result += 1;
    } else if (phrase[index] === 'e') {
      result += 2;
    } else if (phrase[index] === 'i') {
      result += 3;
    } else if (phrase[index] === 'o') {
      result += 4;
    } else if (phrase[index] === 'u') {
      result += 5;
    } else {
      result += phrase[index];
    }
  }
  return console.log(result);
}
encode('hi there!');

function decode(phrase) {
  let result = ' ';
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === '1') {
      result += 'a';
    } else if (phrase[index] === '2') {
      result += 'e';
    } else if (phrase[index] === '3') {
      result += 'i';
    } else if (phrase[index] === '4') {
      result += 'o';
    } else if (phrase[index] === '5') {
      result += 'u';
    } else {
      result += phrase[index];
    }
  }
  return console.log(result);
}
decode('h3 th2r2!');

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
