// Desafio 1
function compareTrue(booleanOne, booleanTwo) {
  if (booleanOne === true && booleanTwo === true) {
    return true;
  } else if (booleanOne === false && booleanTwo === false) {
    return false;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// Desafio 4
function concatName(array) {
  let string = array[array.length - 1] + ', ' + array[0];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
}

// Desafio 6
function highestCount(array) {
  let higherNumber = Math.max.apply(null, array);
  let count = 0;

  for (let index = 0; index < array.length; index++) {
    if (array[index] === higherNumber) {
      count++;
    }
  }

  return count;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance = mouse - cat1;
  let distance2 = mouse - cat2;

  if (distance < 0) {
    distance = Math.abs(-1, distance);
  } else if (distance2 < 0) {
    distance2 = Math.abs(-distance2, distance2);
  }

  if (distance < distance2) {
    let winner = 'cat1';
    return winner;
  } else if (distance2 < distance) {
    let winner = 'cat2';
    return winner;
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
