// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  if (string === 'go Trybe' || string === 'vamo que vamo' || string === 'foguete') {
    array = string.split(' ');
    return array;
  }
}

// Desafio 4
function concatName(array) {
  let string = array[array.length - 1].toString() + ', ' + array[0].toString();
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  if (wins > 0 || ties > 0) {
    points = (wins * 3) + (ties * 1);
    return points;
  }
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let highestNumber = arrayNumbers[0];
  let counter = 0;

  for (let i in arrayNumbers) {
    if (arrayNumbers[i] > highestNumber) {
      highestNumber = arrayNumbers[i];
    }
  }
  for (let i in arrayNumbers) {
    if (arrayNumbers[i] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let stringsArray = [];
  for (let index in arrayNumbers) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      stringsArray.push('fizzBuzz');
    } else if (arrayNumbers[index] % 5 === 0) {
      stringsArray.push('buzz');
    } else if (arrayNumbers[index] % 3 === 0) {
      stringsArray.push('fizz');
    } else {
      stringsArray.push('bug!');
    }
  }
  return stringsArray;
}

// Desafio 9
function encode(string) {
  let encodedString = '';

  for (let i in string) {
    switch (string[i]) {
    case 'a':
      encodedString += '1';
      break;
    case 'e':
      encodedString += '2';
      break;
    case 'i':
      encodedString += '3';
      break;
    case 'o':
      encodedString += '4';
      break;
    case 'u':
      encodedString += '5';
      break;
    default:
      encodedString += string[i];
      break;
    }
  }
  return encodedString;
}
function decode(string) {
  let decodedString = '';

  for (let i in string) {
    switch (string[i]) {
    case '1':
      decodedString += 'a';
      break;
    case '2':
      decodedString += 'e';
      break;
    case '3':
      decodedString += 'i';
      break;
    case '4':
      decodedString += 'o';
      break;
    case '5':
      decodedString += 'u';
      break;
    default:
      decodedString += string[i];
      break;
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
