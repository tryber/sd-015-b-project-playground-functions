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
  let combo = array[array.length - 1] + ', ' + array[0];
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
function fizzBuzz() {
  // seu código aqui
}


// Desafio 9
function encode() {
  let vogal = '';
for (let key in vogaisStrings) {
  switch (vogaisStrings[key]) {
    case 'a':
      vogal += 1;
      break;
    case 'e':
      vogal += 2;
      break;
    case 'i':
      vogal += 3;
      break;
    case 'o':
      vogal += 4;
      break;
    case 'u':
      vogais += 5;
      break;   
    default:
      vogal += vogaisStrings[key];
      break;
  }
  }
  return vogal;
}

function decode() {
  let vogal = '';
  for (let key in vogaisStrings) {
    switch (vogaisStrings[key]) {
      case '1':
        vogal += 'a';
        break;
      case '2':
        vogal += 'e';
        break;
      case '3':
        vogal += 'i';
        break;
      case '4':
        vogal += 'o';
        break;
      case '5':
        vogal += 'u';
        break;   
      default:
        vogal += vogaisStrings[key];
        break;
    }
  }
  return vogal; 
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
