// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(a) {
  let afterSplit = a.split(' ');
  return afterSplit;
}

// Desafio 4
function concatName(array) {
  let inverted = array.reverse();
  return `${inverted[0]}, ${inverted[inverted.length - 1]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
  
}

// Desafio 6
function highestCount(a) {
  let count = 0;
  function bigger (b, c) {
    return b - c;
  }
  let sortedArray = a.sort(bigger);
  let highest = a[sortedArray.length - 1];
  for (let i = 0; i < sortedArray.length; i += 1) {
    if (sortedArray[i] === highest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 + cat2 / 2 === mouse) {
    return 'os gatos trombam e o rato foge';
  } else if (cat2 < cat1) {
    return 'cat2';
  } else if (cat1 < cat2) {
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (array[i] % 5 === 0) {
      result.push('buzz');
    } else if (array[i] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(a) {
  let result = ''
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] === 'a') {
      result += '1';
    } else if (a[i] === 'e') {
      result += '2';
    } else if (a[i] === 'i') {
      result += '3';
    } else if (a[i] === 'o') {
      result += '4';
    } else if (a[i] === 'u') {
      result += '5';
    } else {
      result += a[i]
    }
  }
  return result
}

function decode(a) {
  let result = ''
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] === '1') {
      result += 'a';
    } else if (a[i] === '2') {
      result += 'e';
    } else if (a[i] === '3') {
      result += 'i';
    } else if (a[i] === '4') {
      result += 'o';
    } else if (a[i] === '5') {
      result += 'u';
    } else {
      result += a[i]
    }
  }
  return result

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
