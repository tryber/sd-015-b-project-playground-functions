// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let splited = [];

  let word = '';
  for (let i = 0; i < sentence.length; i += 1) {
    if (sentence[i] === ' ') {
      splited.push(word);
      word = '';
    } else {
      word += sentence[i];
    }
  }

  splited.push(word);
  return splited;
}

// Desafio 4
function concatName(array) {
  let names = '';

  names += array.pop();
  names += ', ';
  names += array.shift();

  return names;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0];
  let count = 0;

  for (let number of numbers) {
    if (number > highestNumber) {
      highestNumber = number;
      count = 1;
    } else if (number === highestNumber) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  let result = '';

  if (distanceCat1 < distanceCat2) {
    result = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }

  return result;
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];

  for (let number of numbers) {
    if (number % 3 === 0) {
      if (number % 5 === 0) {
        result.push('fizzBuzz');
      } else {
        result.push('fizz');
      }
    } else if (number % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }

  return result;
}

// Desafio 9
function encode(string) {
  let result = '';

  for (let letter of string) {
    switch (letter) {
    case 'a':
      result += 1;
      break;
    case 'e':
      result += 2;
      break;
    case 'i':
      result += 3;
      break;
    case 'o':
      result += 4;
      break;
    case 'u':
      result += 5;
      break;
    default:
      result += letter;
      break;
    }
  }

  return result;
}
function decode(string) {
  let result = '';

  for (let letter of string) {
    switch (letter) {
    case '1':
      result += 'a';
      break;
    case '2':
      result += 'e';
      break;
    case '3':
      result += 'i';
      break;
    case '4':
      result += 'o';
      break;
    case '5':
      result += 'u';
      break;
    default:
      result += letter;
      break;
    }
  }

  return result;
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
