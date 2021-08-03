/* eslint-disable complexity */
// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let splitString = string.split(' ');
  return splitString;
}

// Desafio 4
function concatName(nomes) {
  // seu código aqui
  let concatenacao = `${nomes[nomes.length - 1]}, ${nomes[0]}`;
  return concatenacao;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let maxNumber = Math.max(...numbers);
  let count = 0;

  for (let number in numbers) {
    if (numbers[number] === maxNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  for (let number in numbers) {
    if (numbers[number] % 3 === 0 && numbers[number] % 5 === 0) {
      numbers[number] = 'fizzBuzz';
    } else if (numbers[number] % 3 === 0) {
      numbers[number] = 'fizz';
    } else if (numbers[number] % 5 === 0) {
      numbers[number] = 'buzz';
    } else {
      numbers[number] = 'bug!';
    }
  }
  return numbers;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let splitString = string.split('');
  for (let letter in splitString) {
    if (splitString[letter] === 'a') {
      splitString[letter] = 1;
    } else if (splitString[letter] === 'e') {
      splitString[letter] = 2;
    } else if (splitString[letter] === 'i') {
      splitString[letter] = 3;
    } else if (splitString[letter] === 'o') {
      splitString[letter] = 4;
    } else if (splitString[letter] === 'u') {
      splitString[letter] = 5;
    }
  }
  string = splitString.join('');
  return string;
}

function decode(string) {
  // seu código aqui
  let splitString = string.split('');
  for (let letter in splitString) {
    if (splitString[letter] === '1') {
      splitString[letter] = 'a';
    } else if (splitString[letter] === '2') {
      splitString[letter] = 'e';
    } else if (splitString[letter] === '3') {
      splitString[letter] = 'i';
    } else if (splitString[letter] === '4') {
      splitString[letter] = 'o';
    } else if (splitString[letter] === '5') {
      splitString[letter] = 'u';
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
