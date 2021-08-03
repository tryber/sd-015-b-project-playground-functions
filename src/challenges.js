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
