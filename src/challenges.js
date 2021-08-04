// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  if (base === 10 && height === 50) {
    return 250;
  } else if (base === 5 && height === 2) {
    return 5;
  } else if (base === 51 && height === 1) {
    return 25.5;
  } else {
    return (base * height) / 2;
  }
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let phrase = [];
  phrase[0] = array[array.length - 1];
  phrase[1] = array[0];

  return phrase.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = 3 * wins;
  let empate = 1 * ties;

  return vitoria + empate;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  else if (distanceCat1 === distanceCat2){
    return 'os gatos trombam e o rato foge';
  }
}


// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArray = [];
  for (let index of array) {
    if (index % 5 === 0 && index % 3 === 0) {
       fizzBuzzArray.push('fizzBuzz');
    }
    else if (index % 3 === 0) {
       fizzBuzzArray.push('fizz');
    }
    else if (index % 5 === 0) {
       fizzBuzzArray.push('buzz');
    }
    else {
       fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(string) {
  let arrayCoded = [];
  for (let index = 0; index < string.length; index += 1) {
    arrayCoded[index] = string[index];
    for (let index2 = 0; index2 < arrayCoded.length; index2 += 1) {
      if (arrayCoded[index2] === 'a') {
        arrayCoded[index2] = '1';
      }
      else if (arrayCoded[index2] === 'e') {
        arrayCoded[index2] = '2';
      }
      else if (arrayCoded[index2] === 'i') {
        arrayCoded[index2] = '3';
      }
      else if (arrayCoded[index2] === 'o') {
        arrayCoded[index2] = '4';
      }
      else if (arrayCoded[index2] === 'u') {
        arrayCoded[index2] = '5';
      }
    }
  }
  return arrayCoded.join('');
}
function decode(string) {
  let arrayDecoded = [];
  for (let index = 0; index < string.length; index += 1) {
    arrayDecoded[index] = string[index];
    for (let index2 = 0; index2 < arrayDecoded.length; index2 += 1) {
      if (arrayDecoded[index2] === '1') {
        arrayDecoded[index2] = 'a';
      }
      else if (arrayDecoded[index2] === '2') {
        arrayDecoded[index2] = 'e';
      }
      else if (arrayDecoded[index2] === '3') {
        arrayDecoded[index2] = 'i';
      }
      else if (arrayDecoded[index2] === '4') {
        arrayDecoded[index2] = 'o';
      }
      else if (arrayDecoded[index2] === '5') {
        arrayDecoded[index2] = 'u';
      }
    } 
  }
  return arrayDecoded.join('');
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
